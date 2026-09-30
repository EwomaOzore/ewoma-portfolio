import assert from 'node:assert/strict';

// Run against a local production preview: node scripts/check-preview.mjs [origin]
const origin = process.argv[2] ?? 'http://localhost:3100';
for (const locale of ['', '/en', '/fr', '/de', '/es']) {
  const response = await fetch(`${origin}${locale}/`);
  assert.equal(response.status, 200, `Homepage ${locale || '/'} must load without a redirect loop`);
  const html = await response.text();
  assert.match(html, /UTC\+1/, 'Hiring location must render');
  assert.match(html, /"knowsLanguage":\["en"\]/, 'Site translations must not imply spoken fluency');
  const study = await fetch(`${origin}${locale}/work/justrite`);
  assert.equal(study.status, 200, `Case study ${locale} must load`);
  const content = await study.text();
  assert.match(content, /<dl lang="en"/, 'Case-study summary must render with its language');
  for (const heading of ['Ownership', 'Key decision', 'Outcome']) {
    assert.ok(content.includes(heading), `Missing summary field: ${heading}`);
  }
}
const resume = await fetch(`${origin}/documents/Ewomaoghene%20Ozore's%20Resume.pdf`);
assert.equal(resume.status, 200);
assert.match(resume.headers.get('content-type'), /application\/pdf/);
assert.equal(Buffer.from(await resume.arrayBuffer()).subarray(0, 5).toString(), '%PDF-');
console.log('Homepages, case-study summaries, language metadata, and résumé download passed.');
