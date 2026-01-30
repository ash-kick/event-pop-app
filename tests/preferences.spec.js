import {test, expect } from "@playwright/test";

test.describe("Preferences page", ()=>{
    test("should have correct metadata and elements", async({ page, request })=>{
        await page.goto("/preferences");
        await expect(page).toHaveTitle("EventPop");
        await expect(page.getByRole("navigation")).toBeVisible();
        await expect(page.getByRole("heading", {name: "Your Preferences"})).toBeVisible();
        await expect(page.getByRole("form")).toBeVisible();
        // check that all form sections are populating
        const preferenceLabels = [
            "Alerts On",
            "Location",
            "Events Through",
        ];
        const preferenceLegends = [
            "Select Your Favorite Event Types:",
            "Select Your Favorite Genres:"
        ];
        for(let i=0; i<preferenceLabels.length; i++){
        await expect(page.getByLabel(preferenceLabels[i])).toBeVisible();
        }
        for(let i=0; i<preferenceLegends.length; i++){
            const group = page.getByRole("group", {name: preferenceLegends[i]});
            await expect(group).toBeVisible();
            await expect(group.getByRole("checkbox")).not.toHaveCount(0);
        }
        // check that all options are populating for genres and event types
    }) 

    // test("should allow user to select new preferences and save them")
})