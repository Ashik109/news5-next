import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 120_000,
  workers: 2,
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3105", headless: true, trace: "retain-on-failure",
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE }
      : undefined,
  },
  webServer: process.env.PLAYWRIGHT_BASE_URL ? undefined : {
    command: "npm.cmd run start -- -p 3105",
    url: "http://127.0.0.1:3105",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
