import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SubscriptionsPage extends BasePage {
  readonly title: Locator;

  constructor(page) {
    super(page);
    this.title = this.page.getByRole('heading', { name: 'Подписки' });
  }

  async open() {
    await this.page.goto('https://rutube.ru/subscriptions/');
  }
}
