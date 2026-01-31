import { test, expect } from "@playwright/test";

test.describe("Search Page", () => {
    test("should have correct metadata and elements", async ({ page }) => {
        await page.goto("/search");
        await expect(page).toHaveTitle("EventPop");
        await expect(page.getByRole("navigation")).toBeVisible();
        await expect(page.getByRole("heading", { name: "Search for Events" })).toBeVisible();
        await expect(page.getByRole("searchbox")).toBeVisible();
        await expect(page.getByPlaceholder("Artist, Venue, Keyword")).toBeVisible();
    });
    test("should allow user to search for locations and keywords", async ({ page }) => {
        await page.goto("/search");
        await page.getByPlaceholder("Artist, Venue, Keyword").fill("rock");
        await expect(page.getByRole("searchbox")).toHaveValue("rock");
        await expect(page.getByRole("combobox")).toHaveText("Los AngelesSan Francisco");
        await expect(page.getByRole("combobox")).toHaveValue("Los Angeles");
    });
    test("should allow user to pull up events that match keyword and pagination should work", async ({ page }) => {
        await page.goto("/search");
        await page.getByPlaceholder("Artist, Venue, Keyword").fill("rock");
        await page.click("button[type=\"submit\"]");
        // need to add way to check on results being returned
        let searchResults = page.getByRole("listitem");
        await expect(searchResults.filter({ hasText: /rock/i })).toHaveCount(10);
        for (let i = 0; i < searchResults.length; i++) {
            await expect(searchResults.nth(i).getByRole("button")).toHaveCount(1);
        }
        // try saving an event
        let firstUnsavedItem = page.getByRole("listitem").filter({ has: page.locator(".save-event-button") }).first();
        await firstUnsavedItem.locator(".save-event-button").click();
        let secondUnsavedItem = page.getByRole("listitem").filter({ has: page.locator(".save-event-button") }).first();
        await secondUnsavedItem.locator(".save-event-button").click();
        let thirdUnsavedItem = page.getByRole("listitem").filter({ has: page.locator(".save-event-button") }).first();
        await thirdUnsavedItem.locator(".save-event-button").click();
        // next and previous button
        const nextButton = page.locator(".next-button");
        await expect(nextButton).toBeVisible();
        await nextButton.click();
        const previousButton = page.locator(".previous-button");
        await expect(previousButton).toBeVisible();
        await previousButton.click();
        await expect(previousButton).toBeHidden();
    });
});
