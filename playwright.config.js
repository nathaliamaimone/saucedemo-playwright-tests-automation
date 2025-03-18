// @ts-check
import { defineConfig } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  fullyParallel: true,
  reporter: "html",
  use: {
    baseURL: "https://www.saucedemo.com",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
});
