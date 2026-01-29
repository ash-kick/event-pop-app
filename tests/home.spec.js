import { test, expect } from '@playwright/test';


test.describe("Home Page", ()=>{
    test.beforeEach(async ({ page, request }) => {
        const loginRes = await request.post("http://localhost:3000/api/user/login", {
          data: { userName: "test_username", password: "test_password" },
        });
        const { token, userName, userCity } = await loginRes.json();
        await page.goto("http://localhost:5173");
        await page.evaluate(({ token, userName, userCity }) => {
          localStorage.setItem("token", token);
          localStorage.setItem("userName", userName);
          localStorage.setItem("userCity", userCity);
        }, { token, userName, userCity });
      });
    test("should have correct metadata and elements", async({ page })=>{
      await page.goto("http://localhost:5173/home");
      await expect(page).toHaveTitle("EventPop");
      await expect(page.getByRole("navigation")).toBeVisible();
      await expect(page.getByRole("heading", { name: "Upcoming Events in San Francisco" })).toBeVisible();
      await expect(page.getByRole("button", { name: "Get tickets!" })).toBeVisible();
    });
})