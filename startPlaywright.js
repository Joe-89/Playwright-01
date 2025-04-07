/*
1.-Instalace a vytvoření projektu
npm init playwright@latest
-Vyber TypeScript
-Přidej GitHub Actions pokud chceš CI
-Vytvoří ti strukturu projektu

2.-Spuštění prvního testu
npx playwright test

Spuštění v UI režimu:
npx playwright test --ui

npx playwright test --headed  // pro zobrazení UI během testování

3.- Základy struktury testu
// test.spec.ts

import { test, expect } from '@playwright/test';

test('zobrazí homepage', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});

*test(...)  -- definuje test
*page.goto(...) -- otevře stránku
*expect(...) -- porovnává výsledek s očekáváním

4.-Lokátory
 -jsou způsob, jak najít konkrétní prvky na stránce – text, atribut, třídu, CSS nebo XPath.

await page.locator('text=Login').click();
await page.locator('input[name="email"]').fill('pepa@test.cz');

*/
