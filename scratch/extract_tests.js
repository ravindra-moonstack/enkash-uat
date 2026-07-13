const fs = require('fs');
const path = require('path');

function getFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const name = dir + '/' + file;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, filesList);
    } else {
      if (name.endsWith('.ts') || name.endsWith('.js')) {
        filesList.push(name);
      }
    }
  }
  return filesList;
}

const allFiles = getFiles('tests');
const stagedFiles = [
  'tests/jest/blog/api/getPostBySlug.test.ts',
  'tests/playwright/blog/a11y.spec.ts',
  'tests/playwright/blog/error-handling.spec.ts',
  'tests/playwright/blog/navigation.spec.ts',
  'tests/playwright/blog/performance-images.spec.ts',
  'tests/playwright/blog/post-view.spec.ts',
  'tests/playwright/blog/seo-schema.spec.ts'
];

const existingTests = {};
const newTests = {};

const regex = /(?:test|it|describe)\s*\(\s*(['"`])(.*?)\1/g;

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  const tests = [];
  while ((match = regex.exec(content)) !== null) {
    tests.push(match[2]);
  }
  if (tests.length > 0) {
    const normalizedPath = file.replace(/\\/g, '/');
    if (stagedFiles.includes(normalizedPath)) {
      newTests[normalizedPath] = tests;
    } else {
      existingTests[normalizedPath] = tests;
    }
  }
}

fs.writeFileSync('scratch/existing_tests.json', JSON.stringify(existingTests, null, 2));
fs.writeFileSync('scratch/new_tests.json', JSON.stringify(newTests, null, 2));
console.log("Done");
