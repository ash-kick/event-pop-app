import {test, expect } from "@playwright/test";

test.describe("Preferences page", ()=>{
    test("should have correct metadata and elements", async({ page, request })=>{
        await page.goto("/preferences");
        await expect(page).toHaveTitle("EventPop");
        await expect(page.getByRole("navigation")).toBeVisible();
        await expect(page.getByRole("heading", {name: "Your Preferences"})).toBeVisible();
        await expect(page.getByRole("form")).toBeVisible();
        // check that all form sections are populating with at least one option
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
    }) 
    test("should allow user to select new preferences and save them", async ({ page }) => {
        await page.goto("/preferences");
        const genreSection = page.getByRole("group", { name: "Select Your Favorite Genres:" });
        const firstUnchecked = genreSection.getByRole("checkbox", { checked: false }).first();
        await expect(firstUnchecked).toBeVisible();
        // remember which checkbox is being clicked (so it can be checked after)
        const label = await firstUnchecked.getAttribute("value");
        await firstUnchecked.click();
        // confirm that checkbox is now checked
        await expect(genreSection.getByRole("checkbox", { name: label, exact: true })).toBeChecked();
        const savePreferencesButton = page.getByRole("button", { name: "Save Preferences" });
        await savePreferencesButton.click();
        await genreSection.getByRole("checkbox", { name: label, exact: true }).click();
        await savePreferencesButton.click();
    });
})