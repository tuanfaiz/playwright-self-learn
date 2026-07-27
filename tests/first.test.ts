import { expect, test } from '../fixtures/mainPageFixture';

test.describe('Booking a hotel', () => {
  test.beforeEach(async ({ mainPage }) => {
    await mainPage.goto();
  });

  test('Verified Landing Page', async ({ mainPage }) => {
    await mainPage.verifyMainHeader();
  });

  test('Click Book Now', async ({ mainPage }) => {
    await mainPage.clickBookNow();
    await expect(mainPage.page).toHaveURL(/#booking/);
  });

  test('Check Availability', async ({ mainPage }) => {
    await expect(mainPage.checkAvailabilityHeader).toBeVisible();
    await mainPage.fillCheckinDate('27/07/2026');
    await mainPage.fillCheckoutDate('27/10/2026');
    await mainPage.clickCheckAvailability();
  });
});
