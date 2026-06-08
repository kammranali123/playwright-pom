// pages/PracticePage.ts
// Extends BasePage — uses inherited helpers instead of calling page directly.
// Only contains locators and page-specific actions.
// Zero assertions — those live in the test file only.

import { type Page } from '@playwright/test';
import { BasePage } from '../Base/BasePage';

export class PracticePage extends BasePage {
  [x: string]: any;

  constructor(page: Page) {
    // Pass the shared page instance up to BasePage
    super(page);
  }

  // ── BasePage contract ───────────────────────────────────────────────────────
  getPageUrl(): string {
    return 'https://testautomationpractice.blogspot.com/p/playwrightpractice.html';
  }

  // ── Locators ────────────────────────────────────────────────────────────────
  // All wrapped in arrow functions so they are evaluated lazily (at call time,
  // not at construction time) — keeps locators fresh for dynamic elements.

  // Section 1 — Buttons
  primaryButton       = () => this.page.getByRole('button', { name: 'Primary Action' });
  toggleButton        = () => this.page.getByRole('button', { name: 'Toggle Button' });

  // Section 1 — Form elements
  usernameInput       = () => this.page.getByRole('textbox', { name: 'Username' });
  acceptTermsCheckbox = () => this.page.getByRole('checkbox', { name: 'Accept terms' });

  // Section 3 — getByLabel
  emailInput          = () => this.page.getByLabel('Email Address');
  passwordInput       = () => this.page.getByLabel('Password');
  ageInput            = () => this.page.getByLabel('Your Age');
  expressRadio        = () => this.page.getByLabel('Express');
  standardRadio       = () => this.page.getByLabel('Standard');

  // Section 4 — getByPlaceholder
  searchInput         = () => this.page.getByPlaceholder('Search');

  // Section 2 — Submit button
  submitFormButton    = () => this.page.getByRole('button', { name: 'Submit Form' });

  // Alerts
  simpleAlertButton   = () => this.page.getByRole('button', { name: 'Simple Alert' });
  confirmAlertButton  = () => this.page.getByRole('button', { name: 'Confirmation Alert' });
  promptAlertButton   = () => this.page.getByRole('button', { name: 'Prompt Alert' });

  // Mouse hover
  hoverButton         = () => this.page.getByRole('button', { name: 'Point Me' });
  mobilesDropdown     = () => this.page.getByRole('link', { name: 'Mobiles' });

  // Double click
  field1              = () => this.page.locator('#field1');
  field2              = () => this.page.locator('#field2');
  copyTextButton      = () => this.page.getByRole('button', { name: 'Copy Text' });

  // Drag and drop
  dragSource          = () => this.page.locator('#draggable');
  dropTarget          = () => this.page.locator('#droppable');

  // Slider
  slider              = () => this.page.locator('input[type="range"]');

  // New tab
  newTabButton        = () => this.page.getByRole('button', { name: 'New Tab' });

  // Static table
  tableRows           = () => this.page.locator('table').first().locator('tbody tr');

  // Dynamic button START / STOP
  dynamicButton       = () => this.page.getByRole('button', { name: /START|STOP/ });

  // ── Page-specific Actions ───────────────────────────────────────────────────
  // Each method delegates to a BasePage helper instead of calling this.page directly.
  // This keeps page objects thin and ensures all common behaviour is in one place.

  // Navigate to this page
  async navigateTo(): Promise<void> {
    await this.goto(this.getPageUrl());
  }

  // Click the primary action button
  async clickPrimaryButton(): Promise<void> {
    await this.click(this.primaryButton());
  }

  // Click the toggle button
  async clickToggleButton(): Promise<void> {
    await this.click(this.toggleButton());
  }

  // Type a username value
  async typeUsername(value: string): Promise<void> {
    await this.fill(this.usernameInput(), value);
  }

  // Check the Accept Terms checkbox
  async checkAcceptTerms(): Promise<void> {
    await this.check(this.acceptTermsCheckbox());
  }

  // Fill the email address input
  async fillEmail(value: string): Promise<void> {
    await this.fill(this.emailInput(), value);
  }

  // Fill the password input
  async fillPassword(value: string): Promise<void> {
    await this.fill(this.passwordInput(), value);
  }

  // Fill the age input
  async fillAge(value: string): Promise<void> {
    await this.fill(this.ageInput(), value);
  }

  // Select Express shipping radio button
  async selectExpressShipping(): Promise<void> {
    await this.check(this.expressRadio());
  }

  // Type in the search input
  async typeInSearch(value: string): Promise<void> {
    await this.fill(this.searchInput(), value);
  }

  // Click the Submit Form button
  async clickSubmitForm(): Promise<void> {
    await this.click(this.submitFormButton());
  }

  // Handle simple alert — dismiss it
  async dismissSimpleAlert(): Promise<void> {
    await this.dismissDialog();
    await this.click(this.simpleAlertButton());
  }

  // Handle confirmation alert — accept it
  async acceptConfirmAlert(): Promise<void> {
    await this.acceptDialog();
    await this.click(this.confirmAlertButton());
  }

  // Handle prompt alert — fill a value and accept
  async fillPromptAlert(value: string): Promise<void> {
    await this.acceptPromptDialog(value);
    await this.click(this.promptAlertButton());
  }

  // Hover over the Point Me button to reveal the dropdown
  async hoverOverPointMe(): Promise<void> {
    await this.hover(this.hoverButton());
  }

  // Double click the Copy Text button to copy field1 into field2
  async doubleClickCopyText(): Promise<void> {
    await this.doubleClick(this.copyTextButton());
  }

  // Drag the draggable element onto the droppable target
  async doDragAndDrop(): Promise<void> {
    await this.dragTo(this.dragSource(), this.dropTarget());
  }

  // Move the range slider to a given numeric value
  async setSliderValue(value: string): Promise<void> {
    await this.moveSlider(this.slider(), value);
  }

  // Click the dynamic START/STOP button
  async clickDynamicButton(): Promise<void> {
    await this.scrollIntoView(this.dynamicButton());
    await this.click(this.dynamicButton());
  }

  // Return the number of rows in the static table
  async getTableRowCount(): Promise<number> {
    return this.tableRows().count();
  }

  // Return the text of a specific table cell (1-indexed row and column)
  async getTableCellText(row: number, col: number): Promise<string> {
    return this.getText(
      this.tableRows().nth(row - 1).locator('td').nth(col - 1)
    );
  }
}