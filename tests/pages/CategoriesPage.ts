import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CategoriesPage extends BasePage {
  private readonly contentPageLocator: Locator;
  private readonly contentPageAriaLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.contentPageLocator = this.page.locator('.categories-module__categories-page');
    this.contentPageAriaLocator = this.page.locator('.categories-module__categories-page');
  }
  async open() {
    await this.page.goto('https://rutube.ru/categories/');
  }
  async contentPageHasCorrectLayout() {
    await this.contentPageLocator.waitFor({ state: 'visible' });
    await expect(this.contentPageLocator).toHaveScreenshot('categoriesPage.png');
  }
  async contentHasCorrectArialSnapshot() {
    await expect(this.contentPageAriaLocator).toMatchAriaSnapshot({
      name: 'contentAriaSnapshot.yml',
    });
  }
}
