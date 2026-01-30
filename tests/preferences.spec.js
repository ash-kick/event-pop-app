import {test, expect} from "@playwright/test";

test.describe("Preferences page", ()=>{
    test("should have correct metadata and elements", async({ page })=>{
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
            await expect(page.getByRole("group", {name: preferenceLegends[i]})).toBeVisible();
            }
    }) 

    // test("should allow user to select new preferences and save them")
})