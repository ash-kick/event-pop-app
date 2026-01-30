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
       await expect(page.locator("input[type=\"submit\"]")).toBeVisible();
    });

    test("should allow user to fill out fields and submit form", async({page})=>{
        // create variables for filling out registration form
        const registerUserName = `register_${Date.now()}`;
        const registerPassword = `passpass_${Date.now()}`;
        const registerEmail = `register_${Date.now()}@example.com`;
        const registerCity = "San Francisco";
        // fill out registration form
        await page.goto("/register");
        await page.getByLabel("username").fill(registerUserName);
        await page.getByLabel("email").fill(registerEmail);
        await page.getByLabel("password").fill(registerPassword);
        await page.getByLabel("city").selectOption(registerCity);
        await page.click("input[type=\"submit\"]");
        await page.waitForURL(/\/login/);
    })
})