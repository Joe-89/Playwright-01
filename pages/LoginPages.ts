//     Page Object Model (POM) with Fluent API for Login Page

import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("https://practicetestautomation.com/practice-test-login/");
    return this;
  }

  async fillEmail(email: string) {
    await this.page.locator('input[name="username"]').fill(email);
    return this;
  }

  async fillPassword(password: string) {
    await this.page.locator('input[name="password"]').fill(password);
    return this;
  }

  async submit() {
    await this.page.locator('button[id="submit"]').click();
    return this;
  }
}
