/// <reference types="node" />
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
   // 0 retries locally, 2 retries on CI
  retries: process.env.CI ? 2 : 0,

  // Limit workers on CI to avoid resource issues
  workers: process.env.CI ? 2 : undefined,
  use: {
    baseURL: 'https://demo.mealie.io',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'on-first-retry',         // save video on retry
    trace: 'on-first-retry',         // save trace on retry
  },
  reporter: [
    ['list'],                                          // terminal output
    ['html', { open: 'never' }],                       // HTML report
  ],
});