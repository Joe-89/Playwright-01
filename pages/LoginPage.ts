//     Page Object Model (POM)

import { Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://practicetestautomation.com/practice-test-login/");
  }

  async login(email: string, password: string) {
    await this.page.locator('input[name="username"]').fill(email);
    await this.page.locator('input[name="password"]').fill(password);
    await this.page.locator('button[id="submit"]').click();
  }
}
