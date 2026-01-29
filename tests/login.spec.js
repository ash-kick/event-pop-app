import { test, expect } from '@playwright/test';
import { agent } from 'supertest';

test.describe("Login Page", ()=>{
    test("should have correct metadata and elements", async ({page})=>{
        await page.goto("/login");
        await expect(page).toHaveTitle("EventPop");
        await expect(page.getByRole("navigation")).toBeVisible();
        await expect(page.getByRole("heading", { name: "Log In", level: 2 })).toBeVisible();
    })
})