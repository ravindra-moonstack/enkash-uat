const fs = require('fs');
const path = require('path');

const existingTests = JSON.parse(fs.readFileSync('scratch/existing_tests.json', 'utf8'));

let md = `# Existing Test Cases\n\nThis document lists all the test cases that were implemented prior to the current blog-related changes.\n\n`;

const jestTests = {};
const playwrightTests = {};
const otherTests = {};

for (const [file, tests] of Object.entries(existingTests)) {
  if (file.includes('jest')) {
    jestTests[file] = tests;
  } else if (file.includes('playwright')) {
    playwrightTests[file] = tests;
  } else {
    otherTests[file] = tests;
  }
}

md += `## Jest Unit Tests\n\n`;
for (const [file, tests] of Object.entries(jestTests)) {
  md += `### \`${file}\`\n`;
  for (const test of tests) {
    if (test === tests[0] && !test.startsWith('should') && !test.startsWith('adds') && !test.startsWith('fills')) { // rough heuristic for describe block
       md += `- **${test}**\n`;
    } else {
       md += `- ${test}\n`;
    }
  }
  md += `\n`;
}

md += `## Playwright E2E Tests\n\n`;
for (const [file, tests] of Object.entries(playwrightTests)) {
  md += `### \`${file}\`\n`;
  for (const test of tests) {
    md += `- ${test}\n`;
  }
  md += `\n`;
}

if (Object.keys(otherTests).length > 0) {
  md += `## Other Tests\n\n`;
  for (const [file, tests] of Object.entries(otherTests)) {
    md += `### \`${file}\`\n`;
    for (const test of tests) {
      md += `- ${test}\n`;
    }
    md += `\n`;
  }
}

const artifactPath = path.join('c:/Users/dell/.gemini/antigravity-ide/brain/4527929d-69aa-4ea8-9d2a-0eb1599172e7', 'existing_test_cases.md');
fs.writeFileSync(artifactPath, md);
console.log('Artifact created at ' + artifactPath);
