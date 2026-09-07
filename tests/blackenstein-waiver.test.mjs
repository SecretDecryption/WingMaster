import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { test } from 'node:test';
import ts from 'typescript';

async function loadTypeScript(relativePath) {
  const input = await readFile(new URL(relativePath, import.meta.url), 'utf8');
  const { outputText } = ts.transpileModule(input, { compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 } });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
}

const blackenstein = await loadTypeScript('../lib/blackenstein.ts');

test('Blackenstein waiver acknowledgement is session-scoped and rejects bad records', () => {
  const values = new Map();
  const storage = { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) };
  assert.equal(blackenstein.hasCurrentBlackensteinWaiver(storage), false);
  storage.setItem(blackenstein.BLACKENSTEIN_WAIVER_KEY, '{bad json');
  assert.equal(blackenstein.hasCurrentBlackensteinWaiver(storage), false);
  blackenstein.saveBlackensteinWaiver(storage, '2026-09-06T12:00:00.000Z');
  assert.equal(blackenstein.hasCurrentBlackensteinWaiver(storage), true);
  assert.deepEqual(JSON.parse(values.get(blackenstein.BLACKENSTEIN_WAIVER_KEY)), { accepted: true, acceptedAt: '2026-09-06T12:00:00.000Z' });
});

test('every Blackenstein menu item says it is 10 Million Scoville and requires a waiver', async () => {
  const source = await readFile(new URL('../lib/menu-data.ts', import.meta.url), 'utf8');
  const items = [...source.matchAll(/"category": "Blackenstein",\n\s+"image": "[^"]+",\n\s+"description": "([^"]+)"/g)];
  assert.equal(items.length, 3);
  for (const [, description] of items) {
    assert.match(description, /10 Million Scoville/i);
    assert.match(description, /waiver is mandatory/i);
  }
});

test('the order page gates Blackenstein before opening or adding an item', async () => {
  const source = await readFile(new URL('../app/order/page.tsx', import.meta.url), 'utf8');
  assert.match(source, /isBlackensteinItem\(item\).*blackensteinWaiverAccepted/s);
  assert.match(source, /isBlackensteinItem\(itemFor\(line\)\).*hasCurrentBlackensteinWaiver/s);
  assert.match(source, /router\.push\('\/blackenstein#waiver'\)/);
});
