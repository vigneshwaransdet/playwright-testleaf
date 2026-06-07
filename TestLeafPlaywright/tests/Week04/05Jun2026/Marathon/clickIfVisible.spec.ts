import { test, expect, Page } from '@playwright/test';

/**
 * Test Case: Verify dynamic movie ticket booking flow in PVR Cinemas website
 *
 * NOTE: PVR is a heavy, dynamic SPA. Selectors / popups / UI text change often.
 * This script uses flexible, fallback-style locators and dynamic "pick first
 * available" logic. Run with: npx playwright test pvr-booking.spec.ts --headed
 * You will almost certainly need to tweak a few selectors after the first run
 * (use `npx playwright codegen https://www.pvrcinemas.com` to grab live ones).
 */

// Helper: safely click an element if it appears within a short timeout
async function clickIfVisible(page: Page, locator: string, timeout = 4000): Promise<boolean> {
  try {
    const el = page.locator(locator).first();
    await el.waitFor({ state: 'visible', timeout });
    await el.click();
    return true;
  } catch {
    return false;
  }
}

test.describe('PVR Cinemas - Dynamic Booking Flow', () => {
  test.setTimeout(120_000); // booking flow is slow; give it room

  test('Verify dynamic movie ticket booking flow', async ({ page }) => {
    // Step 1 & 2: Launch browser (handled by Playwright) and navigate
    await page.goto('https://www.pvrcinemas.com/', { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle').catch(() => {});

    // Step 11 (early): Accept consent / cookie popup if it shows up first
    await clickIfVisible(page, 'button:has-text("Accept")');
    await clickIfVisible(page, 'button:has-text("Allow")');
    await clickIfVisible(page, 'text=/I Agree/i');

    // Step 3: Select the required city
    // PVR usually shows a city selector or has a default city link
    const citySelected =
      (await clickIfVisible(page, 'text=/Select.*City/i')) ||
      (await clickIfVisible(page, '[class*="city"]'));
    if (citySelected) {
      // pick a common city dynamically (first one in the list)
      await clickIfVisible(page, 'text=Chennai').catch(() => {});
      // fallback: pick the first listed city
      await clickIfVisible(page, '[class*="cityList"] li, [class*="city"] a');
    }
    await page.waitForLoadState('networkidle').catch(() => {});

    // Step 4: Click on the Cinema option (tab/menu)
    await clickIfVisible(page, 'a:has-text("Cinemas"), button:has-text("Cinemas"), text=/^Cinemas$/i');
    await page.waitForLoadState('networkidle').catch(() => {});

    // Step 5: Click on Select Cinema dropdown
    await clickIfVisible(page, 'text=/Select Cinema/i, [class*="cinema"] [class*="dropdown"]');

    // Step 6: Select any available cinema from the list (first available)
    const cinema = page.locator('[class*="cinema"] li, [class*="cinemaList"] a, ul li:has-text("PVR")').first();
    await cinema.waitFor({ state: 'visible', timeout: 10_000 }).catch(() => {});
    await cinema.click().catch(() => {});
    await page.waitForLoadState('networkidle').catch(() => {});

    // Step 7: Select any available date (Today / Tomorrow / Upcoming) - first enabled
    const date = page.locator('[class*="date"]:not([class*="disabled"]), [class*="dateList"] li').first();
    await date.click().catch(() => {});

    // Step 8: Select any available movie from the movie list (first available)
    const movie = page.locator('[class*="movie"] a, [class*="movieList"] li, [class*="poster"]').first();
    await movie.waitFor({ state: 'visible', timeout: 10_000 }).catch(() => {});
    await movie.click().catch(() => {});

    // Step 9: Select any available show time (first available, non-disabled)
    const showTime = page
      .locator('[class*="showtime"]:not([class*="disabled"]) , [class*="show-time"] a, [class*="timing"] button')
      .first();
    await showTime.waitFor({ state: 'visible', timeout: 10_000 }).catch(() => {});
    await showTime.click().catch(() => {});

    // Step 10: Click on the Submit button (if a confirm/submit appears)
    await clickIfVisible(page, 'button:has-text("Submit"), button:has-text("Confirm")');

    // Step 11: Accept consent / cookie popup if displayed (again, mid-flow)
    await clickIfVisible(page, 'button:has-text("Accept")');
    await clickIfVisible(page, 'button:has-text("OK")');

    // Step 12: Accept any additional confirmation popup if displayed
    await clickIfVisible(page, 'button:has-text("Continue"), button:has-text("Proceed")', 3000);
    await clickIfVisible(page, 'button:has-text("Yes")', 3000);

    // Step 13: Select any available seat from the seating layout (first free seat)
    const seat = page
      .locator('[class*="seat"]:not([class*="sold"]):not([class*="occupied"]):not([class*="booked"])')
      .first();
    await seat.waitFor({ state: 'visible', timeout: 15_000 }).catch(() => {});
    await seat.click().catch(() => {});

    // Step 14: Verify the selected seat information is displayed
    const seatInfo = page.locator('[class*="selectedSeat"], text=/Seat/i').first();
    await expect(seatInfo).toBeVisible({ timeout: 10_000 });

    // Step 15: Verify the total ticket amount is displayed
    const totalAmount = page.locator('text=/₹|Total|Amount/i').first();
    await expect(totalAmount).toBeVisible({ timeout: 10_000 });

    // Step 16: Verify the page title is displayed correctly
    const title = await page.title();
    expect(title.toLowerCase()).toContain('pvr');

    // Step 17: Click on the Proceed button
    const proceeded = await clickIfVisible(
      page,
      'button:has-text("Proceed"), button:has-text("Pay"), button:has-text("Continue")'
    );
    expect(proceeded).toBeTruthy();

    // Expected Result: user reached payment / proceed stage successfully
  });
});