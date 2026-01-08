import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async closeCookiesAlert() {
    const button = this.page.locator('button[aria-roledescription*="Cookies"]');
    try {
      await button.waitFor({ state: 'visible', timeout: 3000 });
      await button.click();
    } catch (error) {
      console.debug('Cookies is not found');
    }
  }

  async closeBanner() {
    const closeButton = this.page.getByRole('button', { name: 'Закрыть' });
    try {
      await closeButton.waitFor({ state: 'visible', timeout: 3000 });
      await closeButton.click();
    } catch (error) {
      console.debug('Banner is not found');
    }
  }
}
