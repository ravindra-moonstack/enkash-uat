import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/support');
  await page.locator('.page_logo__NW3rG').click();
  await page.locator('body').press('Tab');
  await page.getByRole('link', { name: 'card visual' }).press('Tab');
  await page.getByRole('textbox', { name: 'Name*', exact: true }).press('Tab');
  await page.getByRole('textbox', { name: 'Business Email ID*' }).press('Tab');
  await page.getByRole('textbox', { name: 'Company Name*' }).press('Tab');
  await page.getByRole('textbox', { name: 'Contact No.*' }).press('Tab');
  await page.getByRole('button', { name: 'How can we help you?*' }).press('Tab');
});