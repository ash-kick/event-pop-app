import { test, expect } from "@playwright/test";

test.describe("Login Page", ()=>{
    test("should have correct metadata and elements", async ({page})=>{
        await page.goto("/login");
        await expect(page).toHaveTitle("EventPop");
        await expect(page.getByRole("navigation")).toBeVisible();
        await expect(page.getByRole("heading", { name: "Log In", level: 2 })).toBeVisible();
        await expect(page.getByText("username")).toBeVisible();
        await expect(page.getByText("password")).toBeVisible();
        await expect(page.locator("input[type=\"submit\"]")).toBeVisible();
    })
    test("should allow user to login", async ({page})=>{
        await page.goto("/login");
    })
})

