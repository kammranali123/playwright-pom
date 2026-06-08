# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login >> invalid login shows error
- Location: tests/login.spec.ts:26:7

# Error details

```
Error: locator.fill: Error: strict mode violation: getByLabel('Password') resolved to 2 elements:
    1) <input size="1" id="password" name="password" type="password" value="MyPassword" class="v-field__input" autocomplete="current-password" aria-labelledby="password-label" aria-describedby="password-messages"/> aka getByRole('textbox', { name: 'Password' })
    2) <i tabindex="0" role="button" aria-hidden="false" aria-label="Password appended action" class="v-icon notranslate v-theme--light v-icon--size-default v-icon--clickable">…</i> aka getByRole('button', { name: 'Password appended action' })

Call log:
  - waiting for getByLabel('Password')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e7]: "This is a Demo for version: nightly"
    - main [ref=e8]:
      - generic [ref=e10]:
        - alert [ref=e11]:
          - img [ref=e14]
          - generic [ref=e17]:
            - paragraph [ref=e18]: It looks like this is your first time logging in.
            - paragraph [ref=e19]:
              - strong [ref=e20]: "Username:"
              - text: changeme@example.com
              - button [ref=e21] [cursor=pointer]:
                - img [ref=e24]
            - paragraph [ref=e26]:
              - strong [ref=e27]: "Password:"
              - text: MyPassword
              - button [ref=e28] [cursor=pointer]:
                - img [ref=e31]
            - paragraph [ref=e33]: Don't want to see this anymore? Be sure to change your email in your user settings!
        - generic [ref=e34]:
          - generic [ref=e38]: Mealie
          - generic [ref=e39]:
            - separator [ref=e40]
            - img [ref=e42]
          - generic [ref=e44]: Sign in
          - generic [ref=e46]:
            - generic [ref=e47]:
              - generic [ref=e49]:
                - img [ref=e52]
                - generic [ref=e54]:
                  - generic: Email or Username
                  - textbox "Email or Username" [active] [ref=e55]: abc@abc.com
              - alert [ref=e56]
            - generic [ref=e58]:
              - generic [ref=e60]:
                - img [ref=e63]
                - generic [ref=e65]:
                  - generic: Password
                  - textbox "Password" [ref=e66]: MyPassword
                - button "Password appended action" [ref=e68] [cursor=pointer]:
                  - img [ref=e69]
              - alert [ref=e71]
            - generic [ref=e73]:
              - generic [ref=e75]:
                - generic [ref=e77]:
                  - img [ref=e79]
                  - checkbox "Remember Me" [ref=e81] [cursor=pointer]
                - generic [ref=e82] [cursor=pointer]: Remember Me
              - alert [ref=e83]
            - button "Login" [ref=e87] [cursor=pointer]:
              - generic [ref=e88]: Login
          - generic [ref=e89]:
            - link "Register" [ref=e90] [cursor=pointer]:
              - /url: /register
              - generic [ref=e91]: Register
            - link "Reset Password" [ref=e92] [cursor=pointer]:
              - /url: /forgot-password
              - generic [ref=e93]: Reset Password
          - generic [ref=e94]:
            - link "Sponsor" [ref=e96] [cursor=pointer]:
              - /url: https://github.com/sponsors/hay-kot
              - generic [ref=e97]:
                - img [ref=e99]
                - text: Sponsor
            - link "GitHub" [ref=e102] [cursor=pointer]:
              - /url: https://github.com/mealie-recipes/mealie
              - generic [ref=e103]:
                - img [ref=e105]
                - text: GitHub
            - link "Docs" [ref=e108] [cursor=pointer]:
              - /url: https://docs.mealie.io/
              - generic [ref=e109]:
                - img [ref=e111]
                - text: Docs
  - generic:
    - tooltip
    - tooltip
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | import { BasePage } from '../Base/BasePage';
  4  | 
  5  | export class LoginPage extends BasePage {
  6  | 
  7  |   emailInput = () => this.page.getByLabel('Email');
  8  |   passwordInput = () => this.page.getByLabel('Password');
  9  |   signInButton = () => this.page.getByRole('button', { name: /sign in/i });
  10 |   errorMessage = () => this.page.getByRole('alert');
  11 | 
  12 |   constructor(page: Page) {
  13 |     super(page);
  14 |   }
  15 |    getPageUrl(): string {
  16 |     // Use a relative URL so Playwright's baseURL from the test config is applied
  17 |     return '/login';
  18 |   }
  19 |   // Navigate to this page
  20 |   async navigateTo(): Promise<void> {
  21 |     await this.goto(this.getPageUrl());
  22 |   }
  23 | 
  24 |   async login(email: string, password: string) {
  25 |     await this.emailInput().fill(email);
> 26 |     await this.passwordInput().fill(password);
     |                                ^ Error: locator.fill: Error: strict mode violation: getByLabel('Password') resolved to 2 elements:
  27 |     await this.signInButton().click();
  28 |   }
  29 |   async getErrorMessage() {
  30 |     return this.errorMessage().innerText();
  31 |   }
  32 | }
```