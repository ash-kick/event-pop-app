import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
    test("should have correct metadata and elements", async ({ page }) => {
        await page.goto("/home");
        await expect(page).toHaveTitle("EventPop");
        await expect(page.getByRole("navigation")).toBeVisible();
        await expect(page.getByRole("heading", { name: "Upcoming Events in Los Angeles" })).toBeVisible();
        await expect(page.getByRole("button", { name: "Get tickets!" }).first()).toBeVisible();
    });
});
