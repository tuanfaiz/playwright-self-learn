import { expect, test } from '../fixtures/mainPageFixture';

const CHECKIN = '27/07/2030'; 
const CHECKOUT = '27/10/2030';

const verifiedCheckin = '2030-07-27';
const verifiedCheckout = '2030-10-27';

test.describe('Booking a hotel', () => {

  test.beforeEach(async ({ mainPage }) => {
    await mainPage.goto();
    await mainPage.verifyMainHeader();
    await mainPage.fillCheckinDate(CHECKIN);
    await mainPage.fillCheckoutDate(CHECKOUT);
  });

  test('Click Book Now', async ({ mainPage }) => {
    await mainPage.clickBookNow();
    await expect(mainPage.page).toHaveURL(/#booking/);
  });

  test('Check Availability', async ({ mainPage }) => {
    await mainPage.clickCheckAvailability();
  });

  test('Book a Room', async ({ mainPage }) => {
    await mainPage.page.getByRole('link', { name: 'Book now' }).nth(1).click();
    await expect(mainPage.page.getByRole('heading', { name: 'Single Room' })).toBeVisible();
    await mainPage.page.getByRole('button', { name: 'Reserve Now' }).click();
    await mainPage.page.getByRole('textbox', { name: 'Firstname' }).fill('tuan faiz');
    await mainPage.page.getByRole('textbox', { name: 'Lastname' }).fill('tuan rashid');
    await mainPage.page.getByRole('textbox', { name: 'Email' }).fill('tuanfaizrashid1221@gmail.com');
    await mainPage.page.getByRole('textbox', { name: 'Phone' }).fill('+60123456789');
    await mainPage.page.getByRole('button', { name: 'Reserve Now' }).click();
    await expect(mainPage.page.getByRole('heading', { name: 'Booking Confirmed' })).toBeVisible();
    await expect(mainPage.page.getByText(`${verifiedCheckin} - ${verifiedCheckout}`)).toBeVisible();
    await mainPage.page.getByRole('link', { name: 'Return home' }).click();
  });
});
