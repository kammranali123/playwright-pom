// import { test } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage';
// import { tags } from '../utils/tags';
// import { testData } from '../utils/testData';

// test.describe('Login', { tag: tags.E2E }, () => {
//   let loginPage: LoginPage;

//   test.beforeEach(async ({ page }) => {
//     loginPage = new LoginPage(page);
//     await loginPage.navigateTo();
//   });

//   test(
//     'valid login redirects away from login page',
//     { tag: [tags.SMOKE, tags.CRITICAL] },
//     async ({ page }) => {
//       await loginPage.login(
//         testData.validUser.email,
//         testData.validUser.password,
//       );
//       //await expect(page).not.toHaveURL(/\/login/);
//     },
//   );

//   test(
//     'invalid login shows error',
//     { tag: tags.ACCEPTANCE },
//     async ({ page }) => {
//       await loginPage.login(
//         testData.invalidUser.email,
//         testData.invalidUser.password,
//       );
//       //await expect(page.getByRole("alert")).toBeVisible();
//     },
//   );
// });
