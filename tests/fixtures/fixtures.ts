import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { SubscriptionsPage } from '../pages/SubscriptionsPage';
import { CategoriesPage } from '../pages/CategoriesPage';

type MyFixtures = {
  mainPage: MainPage;
  subscriptionsPage: SubscriptionsPage;
  categoriesPage: CategoriesPage;
};

export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.closeCookiesAlert();
    await mainPage.closeBanner();
    await use(mainPage);
  },

  subscriptionsPage: async ({ page }, use) => {
    const subscriptionsPage = new SubscriptionsPage(page);
    await subscriptionsPage.open();
    await subscriptionsPage.closeCookiesAlert();
    await subscriptionsPage.closeBanner();
    await use(subscriptionsPage);
  },

  categoriesPage: async ({ page }, use) => {
    const categoriesPage = new CategoriesPage(page);
    await categoriesPage.open();
    await categoriesPage.closeCookiesAlert();
    await categoriesPage.closeBanner();
    await use(categoriesPage);
  },
});

export { expect } from '@playwright/test';
