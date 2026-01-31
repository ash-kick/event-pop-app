import { test, expect } from "@playwright/test";

test.describe("Landing Page", () => {
    test("should have correct metadata and elements", async ({ page }) => {
        await page.goto("/");
        await expect(page).toHaveTitle("EventPop");
        await expect(page.getByRole("navigation")).toBeVisible();
        await expect(page.getByRole("heading", { name: "Find events you'll love" })).toBeVisible();
        await expect(page.getByText("Personalized picks based on your vibe, location, and schedule.")).toBeVisible();
        await expect(page.getByRole("button", { name: "Get Started" })).toBeVisible();
        await expect(page.getByRole("img", { name: "Event card example" })).toBeVisible();
    });
    test("should show feature cards", async ({ page }) => {
        await page.goto("/");
        await expect(page.getByRole("heading", { name: "Discover" })).toBeVisible();
        await expect(page.getByRole("heading", { name: "Personalize" })).toBeVisible();
        await expect(page.getByRole("heading", { name: "Connect" })).toBeVisible();
    });
    test("Get Started button navigates to home when logged in", async ({ page }) => {
        await page.goto("/");
        await page.getByRole("button", { name: "Get Started" }).click();
        await expect(page).toHaveURL(/\/home/);
    });
});
