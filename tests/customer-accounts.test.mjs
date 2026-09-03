import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { PGlite } from '@electric-sql/pglite';
import ts from 'typescript';

async function loadTypeScript(relativePath) {
  const input = await readFile(new URL(relativePath, import.meta.url), 'utf8');
  const { outputText } = ts.transpileModule(input, { compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 } });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
}
const { flavours } = await loadTypeScript('../lib/flavours.ts');
const { cleanCode, cleanEmail, cleanDisplayName } = await loadTypeScript('../lib/customer-validation.ts');
const location = await loadTypeScript('../lib/location.ts');

test('customer form validation', () => {
  assert.equal(cleanDisplayName('  Sam   Lee  '), 'Sam Lee');
  assert.throws(() => cleanDisplayName(' '));
  assert.throws(() => cleanDisplayName('x'.repeat(61)));
  assert.throws(() => cleanDisplayName('Sam\u0000Lee'));
  assert.equal(cleanEmail('  sam@example.com '), 'sam@example.com');
  for (const invalid of ['sam', 'sam@', 'sam @example.com']) assert.throws(() => cleanEmail(invalid));
  assert.equal(cleanCode('123 456'), '123456');
  assert.equal(cleanCode('12345678'), '12345678');
  for (const invalid of ['12345', 'a123456', '12345678901']) assert.throws(() => cleanCode(invalid));
});

test('both map providers target the exact shop address and embed uses street view map type', () => {
  const google = new URL(location.googleDirectionsUrl);
  const apple = new URL(location.appleDirectionsUrl);
  const embed = new URL(location.streetMapUrl);
  assert.equal(google.searchParams.get('destination'), location.shopAddress);
  assert.equal(google.searchParams.get('api'), '1');
  assert.equal(apple.searchParams.get('daddr'), location.shopAddress);
  assert.ok(embed.searchParams.get('q').includes(location.shopAddress));
  assert.equal(embed.searchParams.get('t'), 'm');
  assert.equal(embed.searchParams.get('output'), 'embed');
});

test('actual Postgres schema isolates customer data and validates writes', async t => {
  const db = new PGlite();
  const userA = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
  const userB = 'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb';
  const sauce = flavours[0].id;
  try {
    await db.exec(`create role anon; create role authenticated; create schema auth;
      create table auth.users (id uuid primary key);
      create function auth.uid() returns uuid language sql stable as
      $$ select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid $$;
      grant usage on schema auth to authenticated;
      insert into auth.users values ('${userA}');`);
    await db.exec(await readFile(new URL('../supabase/customer-accounts.sql', import.meta.url), 'utf8'));
    await db.query('insert into auth.users values ($1)', [userB]);
    const profiles = await db.query('select user_id from public.wm_profiles');
    assert.equal(profiles.rows.length, 2, 'existing and new customers receive a profile');
    const catalogue = await db.query('select id from public.wm_sauce_catalogue');
    assert.equal(flavours.length, 220);
    assert.deepEqual(new Set(catalogue.rows.map(row => row.id)), new Set(flavours.map(item => item.id)));

    async function actAs(user, role = 'authenticated') {
      await db.exec('reset role');
      await db.query("select set_config('request.jwt.claim.sub', $1, false)", [user ?? '']);
      await db.exec(`set role ${role}`);
    }
    await actAs(userA);
    await t.test('own profile and favourites can be changed and read back', async () => {
      await db.query('update public.wm_profiles set display_name=$1 where user_id=$2', ['Sam', userA]);
      await db.query('insert into public.wm_favourite_sauces(user_id,sauce_id) values ($1,$2)', [userA, sauce]);
      await db.query('insert into public.wm_favourite_sauces(user_id,sauce_id) values ($1,$2) on conflict do nothing', [userA, sauce]);
      assert.equal((await db.query('select * from public.wm_favourite_sauces')).rows.length, 1);
      assert.equal((await db.query('select display_name from public.wm_profiles')).rows[0].display_name, 'Sam');
    });
    await t.test('arbitrary IDs and invalid names are rejected', async () => {
      await assert.rejects(db.query('insert into public.wm_favourite_sauces(user_id,sauce_id) values ($1,$2)', [userA, 'made-up-sauce']));
      await assert.rejects(db.query('update public.wm_profiles set display_name=$1', ['x'.repeat(61)]));
      await assert.rejects(db.query('update public.wm_profiles set display_name=$1', ['hidden\nname']));
    });
    await t.test('customer B cannot read, edit, remove or create customer A data', async () => {
      await actAs(userB);
      assert.equal((await db.query('select * from public.wm_favourite_sauces')).rows.length, 0);
      assert.equal((await db.query('select * from public.wm_profiles where user_id=$1', [userA])).rows.length, 0);
      assert.equal((await db.query('update public.wm_profiles set display_name=$1 where user_id=$2 returning *', ['Hacked', userA])).rows.length, 0);
      assert.equal((await db.query('delete from public.wm_favourite_sauces where user_id=$1 returning *', [userA])).rows.length, 0);
      await assert.rejects(db.query('insert into public.wm_favourite_sauces(user_id,sauce_id) values ($1,$2)', [userA, flavours[1].id]));
      await assert.rejects(db.query('update public.wm_profiles set user_id=$1 where user_id=$2', [userA, userB]));
      await assert.rejects(db.query('insert into public.wm_profiles(user_id) values ($1)', [userA]));
      await assert.rejects(db.query('insert into public.wm_sauce_catalogue(id) values ($1)', ['rogue']));
    });
    await t.test('anonymous visitors have no customer table permissions', async () => {
      await actAs(null, 'anon');
      for (const table of ['wm_profiles', 'wm_favourite_sauces']) await assert.rejects(db.query(`select * from public.${table}`));
      await assert.rejects(db.query('insert into public.wm_favourite_sauces(user_id,sauce_id) values ($1,$2)', [userA, sauce]));
    });
    await t.test('returning customer retains favourites and can remove them', async () => {
      await actAs(userA);
      assert.equal((await db.query('select sauce_id from public.wm_favourite_sauces')).rows[0].sauce_id, sauce);
      await db.query('delete from public.wm_favourite_sauces where user_id=$1 and sauce_id=$2', [userA, sauce]);
      assert.equal((await db.query('select * from public.wm_favourite_sauces')).rows.length, 0);
    });
    await t.test('deleting an auth account removes its profile and favourites', async () => {
      await db.query('insert into public.wm_favourite_sauces(user_id,sauce_id) values ($1,$2)', [userA, sauce]);
      await db.exec('reset role');
      await db.query('delete from auth.users where id=$1', [userA]);
      assert.equal((await db.query('select * from public.wm_profiles where user_id=$1', [userA])).rows.length, 0);
      assert.equal((await db.query('select * from public.wm_favourite_sauces where user_id=$1', [userA])).rows.length, 0);
    });
  } finally { await db.close(); }
});
