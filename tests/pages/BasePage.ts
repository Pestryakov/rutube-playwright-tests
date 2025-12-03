import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async closeCookiesAlert() {
    await this.page.locator('button[aria-roledescription*="Cookies"]').click();
  }

  async closeBanner() {
    await this.page.getByRole('button', { name: 'Закрыть', exact: true }).click();
  }
}
