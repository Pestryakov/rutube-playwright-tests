import test from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test('Open main page', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
});

test('Checking the accessibility of header elements', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Checking the accessibility of tabs categories', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});

test('Checking the accessibility of menu', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.menuHasCorrectAriaSnapshot();
});
