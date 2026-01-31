import { test } from "@playwright/test";

test("authenticate, logging test user", async ({ page, context }) => {
    await page.goto("/login");
    await page.fill("[name=\"username\"]", process.env.TEST_USER_NAME);
    await page.fill("[name=\"password\"]", process.env.TEST_USER_PASSWORD);
    await page.click("input[type=\"submit\"]");
    await page.waitForURL(/\/home/);
    await context.storageState({ path: "tests/.auth/user.json" });
});
