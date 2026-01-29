import { test, expect } from '@playwright/test';

test.describe("Search Page",()=>{
    test("should have correct metadata and elements", async ({page})=>{
       await page.goto("/search");
       await expect(page).toHaveTitle("EventPop");
       await expect(page.getByRole("navigation")).toBeVisible();
       await expect(page.getByRole("heading", {name: "Search for Events"} )).toBeVisible();
       await expect(page.getByRole("searchbox")).toBeVisible();
       await expect(page.getByPlaceholder("Artist, Venue, Keyword")).toBeVisible();
    });
    test("should allow user to search for keywords and pull up events", async({page})=>{
        await page.goto("/search");
        await page.getByPlaceholder("Artist, Venue, Keyword").fill("rock");
        await expect(page.getByRole("searchbox")).toHaveValue("rock");
    })
    test("should allow user to pull up events that match keyword", async({page})=>{
        await page.goto("/search");
        await page.getByPlaceholder("Artist, Venue, Keyword").fill("rock");
        await page.click('button[type="submit"]');
        // need to add way to check on results being returned
    })
}
)