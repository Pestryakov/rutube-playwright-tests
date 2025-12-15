import { test, expect } from '../../fixtures/fixtures';
import { CategoriesPage } from '../../pages/CategoriesPage';

test('Check layout', async ({ categoriesPage }) => {
  await categoriesPage.contentPageHasCorrectLayout();
});

test('Checking the accessibility of contents elements', async ({ categoriesPage }) => {
  await categoriesPage.contentHasCorrectArialSnapshot();
});
