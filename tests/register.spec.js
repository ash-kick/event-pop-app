import { test, expect } from "@playwright/test";

test.describe("Register Page",()=>{
    test("should have correct metadata and elements", async ({page})=>{
       await page.goto("/register");
       await expect(page).toHaveTitle("EventPop");
       await expect(page.getByRole("navigation")).toBeVisible();
       await expect(page.getByRole("heading", {name: "Register"} )).toBeVisible();
       await expect(page.getByLabel("username")).toBeVisible();
       await expect(page.getByLabel("email")).toBeVisible();
       await expect(page.getByLabel("password")).toBeVisible();
       await expect(page.getByLabel("city")).toBeVisible();
    });
})