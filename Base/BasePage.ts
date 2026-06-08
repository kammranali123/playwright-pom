// pages/BasePage.ts
// Parent class for all page objects.
// No manual waitForVisible before actions — Playwright auto-waits built in.
// Manual waits only used where genuinely needed (side effects, loaders, navigation).

import { type Page, type Locator } from '@playwright/test';

export abstract class BasePage {

  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ── Navigation ──────────────────────────────────────────────────────────────

  // Navigate to a full URL or relative path
  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  // Reload the current page
  async reload(): Promise<void> {
    await this.page.reload();
  }

  // Go back to the previous page
  async goBack(): Promise<void> {
    await this.page.goBack();
  }

  // Return the current page URL
  getCurrentUrl(): string {
    return this.page.url();
  }

  // Return the current page title
  async getTitle(): Promise<string> {
    return this.page.title();
  }

  // ── Waits — only used for side effects, NOT before actions ──────────────────

  // Wait for an element to appear as a result of a previous action
  // e.g. a success message after form submit, a modal after a button click
  async waitForVisible(locator: Locator, timeout = 10000): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
  }

  // Wait for a loader or spinner to disappear before continuing
  async waitForHidden(locator: Locator, timeout = 10000): Promise<void> {
    await locator.waitFor({ state: 'hidden', timeout });
  }

  // Wait for page to fully load after navigation
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('load');
  }

  // // Wait for network to go idle — use after actions that trigger API calls
  // async waitForNetworkIdle(): Promise<void> {
  //   await this.page.waitForLoadState('networkidle');
  // }

  // Wait for URL to match a pattern — use after form submit or link click
  async waitForUrl(urlPattern: string | RegExp, timeout = 30000): Promise<void> {
    await this.page.waitForURL(urlPattern, { timeout });
  }

  // ── Click ───────────────────────────────────────────────────────────────────

  // Standard click — Playwright auto-waits for visibility, stability, enabled
  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  // Double click
  async doubleClick(locator: Locator): Promise<void> {
    await locator.dblclick();
  }

  // Right click
  async rightClick(locator: Locator): Promise<void> {
    await locator.click({ button: 'right' });
  }

  // Scroll into view then click — only needed for elements outside the viewport
  async scrollAndClick(locator: Locator): Promise<void> {
    await locator.scrollIntoViewIfNeeded();
    await locator.click();
  }

  // Force click — bypasses actionability checks, use sparingly
  async forceClick(locator: Locator): Promise<void> {
    await locator.click({ force: true });
  }

  // ── Input ───────────────────────────────────────────────────────────────────

  // Clear field and fill with value — Playwright auto-waits for the element
  async fill(locator: Locator, value: string): Promise<void> {
    await locator.clear();
    await locator.fill(value);
  }

  // Type character by character — use for autocomplete or debounced inputs
  async typeSlowly(locator: Locator, value: string, delay = 50): Promise<void> {
    await locator.clear();
    await locator.pressSequentially(value, { delay });
  }

  // Clear an input field
  async clear(locator: Locator): Promise<void> {
    await locator.clear();
  }

  // Press a keyboard key globally e.g. 'Enter', 'Tab', 'Escape'
  async pressKey(key: string): Promise<void> {
    await this.page.keyboard.press(key);
  }

  // Press a key on a specific element
  async pressKeyOnElement(locator: Locator, key: string): Promise<void> {
    await locator.press(key);
  }

  // ── Checkbox & Radio ────────────────────────────────────────────────────────

  // Check a checkbox or radio — Playwright auto-waits
  async check(locator: Locator): Promise<void> {
    await locator.check();
  }

  // Uncheck a checkbox — Playwright auto-waits
  async uncheck(locator: Locator): Promise<void> {
    await locator.uncheck();
  }

  // ── Dropdown ────────────────────────────────────────────────────────────────

  // Select option by visible label text
  async selectByText(locator: Locator, text: string): Promise<void> {
    await locator.selectOption({ label: text });
  }

  // Select option by value attribute
  async selectByValue(locator: Locator, value: string): Promise<void> {
    await locator.selectOption({ value });
  }

  // ── Mouse ───────────────────────────────────────────────────────────────────

  // Hover — Playwright auto-waits for the element
  async hover(locator: Locator): Promise<void> {
    await locator.hover();
  }

  // Drag one element onto another
  async dragTo(source: Locator, target: Locator): Promise<void> {
    await source.dragTo(target);
  }

  // Move a range slider to a numeric value
  async moveSlider(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
  }

  // ── Scroll ──────────────────────────────────────────────────────────────────

  // Scroll a specific element into the viewport
  async scrollIntoView(locator: Locator): Promise<void> {
    await locator.scrollIntoViewIfNeeded();
  }

  // Scroll page to the very bottom
  async scrollToBottom(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  // Scroll page back to the top
  async scrollToTop(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, 0));
  }

  // ── Alerts ──────────────────────────────────────────────────────────────────

  // Register handler to accept the next alert or confirm dialog
  // Must be called BEFORE the action that triggers the dialog
  async acceptDialog(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
  }

  // Register handler to dismiss the next alert or confirm dialog
  async dismissDialog(): Promise<void> {
    this.page.once('dialog', dialog => dialog.dismiss());
  }

  // Register handler to fill and accept a prompt dialog
  async acceptPromptDialog(value: string): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept(value));
  }

  // ── Screenshots ─────────────────────────────────────────────────────────────

  // Full page screenshot saved to /screenshots/<name>-<timestamp>.png
  async takeScreenshot(name: string): Promise<void> {
    await this.page.screenshot({
      path: `screenshots/${name}-${Date.now()}.png`,
      fullPage: true,
    });
  }

  // Screenshot of a single element only
  async takeElementScreenshot(locator: Locator, name: string): Promise<void> {
    await locator.screenshot({
      path: `screenshots/${name}-element-${Date.now()}.png`,
    });
  }

  // ── Getters ─────────────────────────────────────────────────────────────────

  // Get the visible inner text of an element
  async getText(locator: Locator): Promise<string> {
    return locator.innerText();
  }

  // Get the current value of an input field
  async getValue(locator: Locator): Promise<string> {
    return locator.inputValue();
  }

  // Get any HTML attribute value from an element
  async getAttribute(locator: Locator, attribute: string): Promise<string | null> {
    return locator.getAttribute(attribute);
  }

  // Returns true/false — does not throw if element is absent
  async isVisible(locator: Locator): Promise<boolean> {
    return locator.isVisible();
  }

  // Returns true if the element is enabled
  async isEnabled(locator: Locator): Promise<boolean> {
    return locator.isEnabled();
  }

  // Returns true if checkbox or radio is checked
  async isChecked(locator: Locator): Promise<boolean> {
    return locator.isChecked();
  }

  // ── Abstract ─────────────────────────────────────────────────────────────────

  // Each page object must declare its own URL
  abstract getPageUrl(): string;
}