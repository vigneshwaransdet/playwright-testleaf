import test from '@playwright/test'

/*
Different Types of Screenshot in Playwright
*/

/*
1) Element Screenshot
Syntax:
await page.locator("selector").screenshot({ path: "fileName.png" });

Definition:
Captures only a specific web element identified using a locator.
Used for validating logos, buttons, error messages, or individual UI components.
*/
// Example 1:
// test('Particular Page screenshot', async ({ page }) => {
//   await page.goto('https://www.youtube.com/@TestLeaf');
//   await page.waitForTimeout(2000);
//   await page.locator(".yt-spec-avatar-shape--avatar-size-giant")
//       .screenshot({ path: 'fold/paticularElementScreenShots.png' });
// });

/*
2) Page Screenshot (Visible Area)
Syntax:
await page.screenshot({ path: "fileName.png" });

Definition:
Captures only the currently visible viewport area.
Useful for debugging UI issues visible on screen.
*/
// Example 2:
// test('UI Page ScreenShot', async ({ page }) => {
//   await page.goto('https://www.youtube.com/@TestLeaf');
//   await page.waitForTimeout(2000);
//   await page.screenshot({ path: 'fold/UservisiblePages.png' });
// });

/*
3) Full Page Screenshot
Syntax:
await page.screenshot({
    path: "fileName.png",
    fullPage: true
});

Definition:
Captures the entire scrollable webpage including hidden sections.
Ideal for complete UI validation and reporting evidence
*/

// Example 3:
test('UI Full Page ScreenShot', async ({ page }) => {
  await page.goto('https://www.youtube.com/@TestLeaf');
  await page.waitForTimeout(2000);
  await page.screenshot({
      path: 'TestData/FullPages.png',
      fullPage: true
  });
});