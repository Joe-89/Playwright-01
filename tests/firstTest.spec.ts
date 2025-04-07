import { test, expect } from "@playwright/test";

test("first test", async ({ page }) => {
  await page.goto("https://contentboosters.cz/");
  await expect(page).toHaveTitle(/Content Boosters/);
});

//Spuštění jednoho konkrétního testu:
// npx playwright test tests/firstTest.spec.ts
