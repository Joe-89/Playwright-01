//Testing -> Record New

import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.seznam.cz/");
  await page.locator("#merkur-container div").nth(4).click();
  await page.getByTestId("cw-button-agree-with-ads").click();
  await page.getByRole("link", { name: "Seznam.cz - hlavní strana" }).click();
});
