// import { Page } from '@playwright/test';

// import { BasePage } from '../Base/BasePage';

// export class LoginPage extends BasePage {

//   emailInput = () => this.page.getByLabel('Email');
//   passwordInput = () => this.page.getByLabel('Password');
//   signInButton = () => this.page.getByRole('button', { name: /sign in/i });
//   errorMessage = () => this.page.getByRole('alert');

//   constructor(page: Page) {
//     super(page);
//   }
//    getPageUrl(): string {
//     // Use a relative URL so Playwright's baseURL from the test config is applied
//     return '/login';
//   }
//   // Navigate to this page
//   async navigateTo(): Promise<void> {
//     await this.goto(this.getPageUrl());
//   }

//   async login(email: string, password: string) {
//     await this.emailInput().fill(email);
//     await this.passwordInput().fill(password);
//     await this.signInButton().click();
//   }
//   async getErrorMessage() {
//     return this.errorMessage().innerText();
//   }
// }