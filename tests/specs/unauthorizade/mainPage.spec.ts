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

test('Checking the accessibility of elements list add to content', async ({ mainPage }) => {
  await mainPage.openAddPopupList();
  await mainPage.addPopupListHasCorrectAriaSnapshot();
});

test('Checking the accessibility of popup notifications', async ({ mainPage }) => {
  await mainPage.openNotifictionPopupList();
  await mainPage.notificationPopupHasCorrectAriaSnapshot();
});

test('Checking the accessibility of authorizations popup', async ({ mainPage }) => {
  await mainPage.openAuthorizationModal();
  await mainPage.authorizationModalHasCorrectAriaSnapshot();
});

test('Checking the accessibility of open menu', async ({ mainPage }) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});

test('Switch the theme', async ({ mainPage }) => {
  await mainPage.checkThemeAttributeValue('dark2021');
  await mainPage.changeThemeToWhite();
  await mainPage.checkThemeAttributeValue('white2022');
});
