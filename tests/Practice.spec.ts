// tests/practice.spec.ts
// Uses the fixed beforeEach pattern — practice is declared once at describe scope,
// assigned in beforeEach, and used directly in every test with no re-instantiation.

import { test, expect } from '@playwright/test';
import { PracticePage } from '../pages/PracticePage';

test.describe('Playwright Practice Page — 20 Actions', () => {

  // Declared at describe scope — shared across beforeEach and all tests
  let practice: PracticePage;

  // Runs before every test — creates a fresh instance and navigates to the page
  test.beforeEach(async ({ page }) => {
    practice = new PracticePage(page);
    await practice.navigateTo();
  });

  // ── Test 1: Click Primary Button ──────────────────────────────────────────
  test('01 - Click primary action button', async () => {
    await practice.clickPrimaryButton();
    await expect(practice.primaryButton()).toBeVisible();
  });

  // ── Test 2: Toggle Button ─────────────────────────────────────────────────
  test('02 - Click toggle button', async () => {
    await practice.clickToggleButton();
    await expect(practice.toggleButton()).toBeVisible();
  });

  // ── Test 3: Type Username ─────────────────────────────────────────────────
  test('03 - Type username using getByRole textbox', async () => {
    await practice.typeUsername('nayyer_ali');
    await expect(practice.usernameInput()).toHaveValue('nayyer_ali');
  });

  // ── Test 4: Checkbox ──────────────────────────────────────────────────────
  test('04 - Check the Accept Terms checkbox', async () => {
    await expect(practice.acceptTermsCheckbox()).not.toBeChecked();
    await practice.checkAcceptTerms();
    await expect(practice.acceptTermsCheckbox()).toBeChecked();
  });

  // ── Test 5: Fill Email ────────────────────────────────────────────────────
  test('05 - Fill Email Address using getByLabel', async () => {
    await practice.fillEmail('nayyer@test.com');
    await expect(practice.emailInput()).toHaveValue('nayyer@test.com');
  });

  // ── Test 6: Fill Password ─────────────────────────────────────────────────
  test('06 - Fill Password field using getByLabel', async () => {
    await practice.fillPassword('SecurePass123');
    await expect(practice.passwordInput()).toHaveValue('SecurePass123');
  });

  // ── Test 7: Fill Age ──────────────────────────────────────────────────────
  test('07 - Fill age number input', async () => {
    await practice.fillAge('28');
    await expect(practice.ageInput()).toHaveValue('28');
  });

  // ── Test 8: Radio Button ──────────────────────────────────────────────────
  test('08 - Select Express shipping radio button', async () => {
    await practice.selectExpressShipping();
    await expect(practice.expressRadio()).toBeChecked();
    await expect(practice.standardRadio()).not.toBeChecked();
  });

  // ── Test 9: Search Placeholder ────────────────────────────────────────────
  test('09 - Type in search input using getByPlaceholder', async () => {
    await practice.typeInSearch('Playwright automation');
    await expect(practice.searchInput()).toHaveValue('Playwright automation');
  });

  // ── Test 10: Keyboard Press ───────────────────────────────────────────────
  test('10 - Keyboard press Enter after typing in search', async () => {
    await practice.typeInSearch('keyboard test');
    await practice.pressKey('Enter');
    await expect(practice.searchInput()).toHaveValue('keyboard test');
  });

  // ── Test 11: Simple Alert ─────────────────────────────────────────────────
  test('11 - Dismiss simple alert dialog', async ({ page }) => {
    await practice.dismissSimpleAlert();
    await expect(page).toHaveURL(/playwrightpractice/);
  });

  // ── Test 12: Confirm Alert ────────────────────────────────────────────────
  test('12 - Accept confirmation alert dialog', async ({ page }) => {
    await practice.acceptConfirmAlert();
    await expect(page).toHaveURL(/playwrightpractice/);
  });

  // ── Test 13: Prompt Alert ─────────────────────────────────────────────────
  test('13 - Fill prompt alert with text and accept', async ({ page }) => {
    await practice.fillPromptAlert('Nayyer Ali');
    await expect(page).toHaveURL(/playwrightpractice/);
  });

  // ── Test 14: Mouse Hover ──────────────────────────────────────────────────
  test('14 - Hover over Point Me button to reveal dropdown', async () => {
    await practice.hoverOverPointMe();
    await expect(practice.mobilesDropdown()).toBeVisible();
  });

  // ── Test 15: Double Click ─────────────────────────────────────────────────
  test('15 - Double click Copy Text button copies field1 into field2', async () => {
    await expect(practice.field2()).toHaveValue('');
    await practice.doubleClickCopyText();
    const field1Value = await practice.getValue(practice.field1());
    await expect(practice.field2()).toHaveValue(field1Value);
  });

  // ── Test 16: Drag and Drop ────────────────────────────────────────────────
  test('16 - Drag source element onto drop target', async () => {
    await expect(practice.dragSource()).toBeVisible();
    await expect(practice.dropTarget()).toBeVisible();
    await practice.doDragAndDrop();
    await expect(practice.dropTarget()).toBeVisible();
  });

  // ── Test 17: Slider ───────────────────────────────────────────────────────
  test('17 - Move range slider to value 75', async () => {
    await practice.setSliderValue('75');
    await expect(practice.slider()).toHaveValue('75');
  });

  // ── Test 18: New Tab ──────────────────────────────────────────────────────
  test('18 - Click New Tab button and verify new tab opens', async ({ context }) => {
    const newTabPromise = context.waitForEvent('page');
    await practice.newTabButton().click();
    const newTab = await newTabPromise;
    await newTab.waitForLoadState('load');
    expect(newTab.url()).not.toBe('about:blank');
  });

  // ── Test 19: Static Table ─────────────────────────────────────────────────
  test('19 - Read static table and verify cell values', async () => {
    const rowCount = await practice.getTableRowCount();
    expect(rowCount).toBe(7);

    const firstBook = await practice.getTableCellText(1, 1);
    expect(firstBook).toContain('Learn Selenium');

    const firstAuthor = await practice.getTableCellText(1, 2);
    expect(firstAuthor).toContain('Amit');
  });

  // ── Test 20: Scroll + Dynamic START/STOP Button ───────────────────────────
  test('20 - Scroll to dynamic button, click START then STOP', async () => {
    await expect(practice.dynamicButton()).toHaveText('START');
    await practice.clickDynamicButton();
    await expect(practice.dynamicButton()).toHaveText('STOP', { timeout: 5000 });
    await practice.clickDynamicButton();
    await expect(practice.dynamicButton()).toHaveText('START', { timeout: 5000 });
  });

});