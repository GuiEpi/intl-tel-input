import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests-e2e",
  timeout: 30_000,
  retries: 0,
  expect: {
    toHaveScreenshot: {
      // Reduce flakiness from caret blink / CSS animations.
      animations: "disabled",
      caret: "hide",
      scale: "css",
    },
  },
  use: {
    baseURL: "http://localhost:4173",
    trace: "on-first-retry",
    viewport: { width: 900, height: 600 },
    deviceScaleFactor: 1,
  },
  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
      },
    },
  ],
  webServer: {
    command: "./node_modules/.bin/http-server -p 4173 -c-1 .",
    url: "http://localhost:4173/tests-e2e/fixtures/vanilla.html",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});