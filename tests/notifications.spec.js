import { test, expect } from "@playwright/test";

test.describe("Notifications page", () => {
    test("should have correct metadata and elements", async ({ page }) => {
        await page.goto("/notifications");
        await expect(page.getByRole("navigation")).toBeVisible();
        await expect(page.getByRole("heading", { name: "Notifications" })).toBeVisible();
        await expect(page.getByRole("heading", { name: "Unread" })).toBeVisible();
        await expect(page.getByRole("heading", { name: "Read", exact: true })).toBeVisible();
    });
    test("should allow user to mark notification as read", async ({ page }) => {
        await page.goto("/notifications");
        const firstUnread = page.getByRole("list").first().getByRole("listitem").first();
        const notificationText = await firstUnread.locator(".notificatoin-event-name-venue").innerText();
        await expect(firstUnread).toBeVisible();
        await firstUnread.getByRole("button", { name: "Mark Read" }).click();
        const readList = page.getByRole("list").nth(1);
        await expect(readList).toContainText(notificationText);
    });
});
