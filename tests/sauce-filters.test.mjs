import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { test } from 'node:test';
import ts from 'typescript';

const input = await readFile(new URL('../lib/flavours.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(input, { compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 } });
const { flavours, heatFilters, filterFlavours } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);

test('every heat filter uses the same catalogue in the Wing Bible and order picker', () => {
  assert.deepEqual(heatFilters, ['All heat', 'No heat', 'Spicy', 'Hot', '1–3 flames', 'Extreme']);
  const predicates = {
    'All heat': () => true,
    'No heat': f => f.heat === 'N',
    Spicy: f => f.heat === 'S',
    Hot: f => f.heat === 'H',
    '1–3 flames': f => ['1', '2', '3'].includes(f.heat),
    Extreme: f => /[KM]/.test(f.heat),
  };
  for (const heat of heatFilters) {
    assert.deepEqual(filterFlavours('', heat, false, false), flavours.filter(predicates[heat]));
  }
});

test('Your Sauces combines with heat, dry rubs, Top 10 and search without changing saved IDs', () => {
  const saved = Object.freeze(flavours.filter((_, index) => index % 2 === 0).map(f => f.id));
  for (const heat of heatFilters) {
    for (const dry of [false, true]) {
      for (const popular of [false, true]) {
        for (const query of ['', 'BBQ', '  dill  ']) {
          const all = filterFlavours(query, heat, dry, popular);
          assert.deepEqual(filterFlavours(query, heat, dry, popular, saved), all.filter(f => saved.includes(f.id)));
        }
      }
    }
  }
  assert.equal(saved.length, Math.ceil(flavours.length / 2));
});

test('empty or unknown saved IDs never show the full catalogue', () => {
  assert.deepEqual(filterFlavours('', 'All heat', false, false, []), []);
  assert.deepEqual(filterFlavours('', 'All heat', false, false, ['unknown']), []);
  assert.equal(filterFlavours('', 'All heat', false, false).length, flavours.length);
});

test('dry rubs are not automatically treated as no heat', () => {
  const dry = filterFlavours('', 'All heat', true, false);
  assert.ok(dry.some(f => f.heat !== 'N'));
  assert.ok(filterFlavours('', 'No heat', true, false).every(f => f.heat === 'N'));
});
