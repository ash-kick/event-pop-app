import { test, expect } from "@playwright/test";

test.describe("My Events Page", () => {
    test("should have correct metadata and elements", async ({ page }) => {
        await page.goto("/events");
        await expect(page).toHaveTitle("EventPop");
        await expect(page.getByRole("navigation")).toBeVisible();
        await expect(page.getByRole("heading", { name: "Your Saved Events" })).toBeVisible();
    });
    test("should display saved events for user", async ({ page }) => {
        await page.goto("/events");
        // check that there is at least one saved event for the test user and that they have a remove button
        let savedEvents = page.getByRole("listitem");
        await expect(savedEvents.first()).toBeVisible();
        let savedEventsCount = await savedEvents.count();
        await expect(savedEvents).not.toHaveCount(0);
        for (let i = 0; i < savedEventsCount; i++) {
            await expect(savedEvents.nth(i).getByRole("button")).toHaveCount(1);
        }
        await savedEvents.first().getByRole("button", { name: "Remove" }).click();
        await expect(savedEvents).toHaveCount(savedEventsCount - 1);
    });
});
