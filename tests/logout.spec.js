import { test, expect } from "@playwright/test";

test.describe("Log Out", ()=>{
    test("should exist on landing page and log user out when clicked", async({ page })=>{
      await page.goto("/");
      await expect(page.getByRole("navigation")).toBeVisible();
      await expect(page.getByRole("button", { name: "Log out" }).first()).toBeVisible();
      await page.getByRole("button", { name: "Log out" }).click();
      await page.waitForURL(/\/login/);
    });
});
