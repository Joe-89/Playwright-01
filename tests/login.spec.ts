// spuštění:  npx playwright test tests/login.spec.ts --ui
// Zdroj je v pages -> LoginPages.ts

import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPages";

/*
test("Přihlášení funguje", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("student", "Password123");

  await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/");
});

*/

test("Přihlášení uživatele", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto().then(async (loginPage) => {
    await loginPage.fillEmail("student");
    await loginPage.fillPassword("Password123");
    await loginPage.submit();
  });

  await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/");
  await expect(page.locator("h1")).toHaveText("Logged In Successfully");
});
