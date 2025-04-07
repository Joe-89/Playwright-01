/*
Tato šablona pro testování UI pomocí Playwrightu v TypeScriptu obsahuje:

Základní strukturu s importy Playwright knihoven
Pomocné funkce jako je login pro znovupoužití kódu
Dva test suite:

-Testy přihlašovací stránky (zobrazení formuláře, úspěšné přihlášení, chybové zprávy)
-Testy dashboardu (zobrazení dat, navigace)

Speciální testy pro snímky obrazovky a responzivní design

Pro použití této šablony budete potřebovat:

-Upravit URL a selektory podle vaší aplikace
-Spustit testy příkazem: npx playwright test   /   npx playwright test --headed  // pro zobrazení UI během testování
*/

import { test, expect, Page } from "@playwright/test";

// Konfigurace pro znovupoužití napříč testy
const URL = "https://example.com";

// Pomocné funkce
async function login(page: Page, username: string, password: string) {
  await page.goto(`${URL}/login`);
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);
  await page.click('button[type="submit"]');
  // Ověření úspěšného přihlášení
  await expect(page.locator(".user-avatar")).toBeVisible();
}

// Test suite pro přihlašovací stránku
test.describe("Testy přihlašovací stránky", () => {
  // Před každým testem se otevře nová stránka
  test.beforeEach(async ({ page }) => {
    await page.goto(`${URL}/login`);
  });

  test("zobrazuje přihlašovací formulář", async ({ page }) => {
    // Ověření že stránka obsahuje přihlašovací elementy
    await expect(page.locator('input[name="username"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test("přihlášení s platnými údaji", async ({ page }) => {
    await page.fill('input[name="username"]', "testuser");
    await page.fill('input[name="password"]', "password123");

    // Test odeslání formuláře
    await page.click('button[type="submit"]');

    // Ověření úspěšného přihlášení (přesměrování na dashboard)
    await expect(page).toHaveURL(`${URL}/dashboard`);
    await expect(page.locator(".welcome-message")).toContainText("Vítejte");
  });

  test("zobrazuje chybu při neplatných údajích", async ({ page }) => {
    await page.fill('input[name="username"]', "neexistujici_uzivatel");
    await page.fill('input[name="password"]', "spatne_heslo");

    await page.click('button[type="submit"]');

    // Ověření zobrazení chybové zprávy
    await expect(page.locator(".error-message")).toBeVisible();
    await expect(page.locator(".error-message")).toContainText("Neplatné přihlašovací údaje");
  });
});

// Test suite pro dashboard
test.describe("Testy dashboardu", () => {
  // Před každým testem se provede přihlášení
  test.beforeEach(async ({ page }) => {
    await login(page, "testuser", "password123");
  });

  test("dashboard zobrazuje uživatelská data", async ({ page }) => {
    await expect(page.locator(".user-profile")).toBeVisible();
    await expect(page.locator(".dashboard-stats")).toBeVisible();
  });

  test("kliknutí na záložku profilu zobrazí profil", async ({ page }) => {
    await page.click("nav >> text=Profil");
    await expect(page).toHaveURL(`${URL}/profile`);
    await expect(page.locator("h1")).toContainText("Uživatelský profil");
  });
});

// Test pro snímek obrazovky (screenshot)
test("vytvoří snímek celé stránky", async ({ page }) => {
  await page.goto(URL);
  await page.screenshot({ path: "screenshots/homepage.png", fullPage: true });
});

// Test pro mobilní zobrazení
test("responzivní design na mobilních zařízeních", async ({ page }) => {
  // Nastavení viewportu na mobilní rozlišení
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(URL);

  // Ověření že menu pro mobilní zařízení existuje
  await expect(page.locator(".mobile-menu-toggle")).toBeVisible();

  // Otevření mobilního menu
  await page.click(".mobile-menu-toggle");
  await expect(page.locator(".mobile-menu")).toBeVisible();
});
