import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Přihlášení funguje", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("student", "Password123");

  await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/");
});
