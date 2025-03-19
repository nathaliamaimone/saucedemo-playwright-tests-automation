import { defineConfig, devices } from '@playwright/test';
import path from 'path';

export const STORAGE_STATE = path.join(__dirname, 'playwright/.auth/login-data.json');

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  fullyParallel: true,
  reporter: [
    ['html'], ["ortoni-report", {
      projectName: "saucedemo-playwright-tests-automation",
      authorName: "Nathalia Maimone",
    }]
  ],
  use: {
    baseURL: 'https://www.saucedemo.com',
    screenshot: 'on',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'setup',
      testMatch: '**/*/*.setup.js',
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], storageState: STORAGE_STATE },
      dependencies: ['setup'],
    }
  ],
});