import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Open main page', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
});

test('Checking the accessibility of header elements', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Checking the accessibility of tabs categories', async ({ mainPage }) => {
  await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});

test('Checking the accessibility of menu', async ({ mainPage }) => {
  await mainPage.menuHasCorrectAriaSnapshot();
});
