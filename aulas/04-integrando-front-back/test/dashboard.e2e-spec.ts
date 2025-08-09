import { test, expect } from '@playwright/test';

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(page.getByText('20', { exact: true })).toBeVisible();
  await expect(page.getByText('-2% em relação a ontem')).toBeVisible();
});

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(page.getByText('30', { exact: true })).toBeVisible();
  await expect(page.getByText('+3% em relação ao mês passado')).toBeVisible();
});

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(page.getByText('40', { exact: true })).toBeVisible();
  await expect(page.getByText('+4% em relação ao mês passado')).toBeVisible();
});

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(page.getByText('R$ 50,00', { exact: true })).toBeVisible();
  await expect(page.getByText('+5% em relação ao mês passado')).toBeVisible();
});
