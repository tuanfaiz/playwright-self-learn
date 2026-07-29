import { test } from '../fixtures/adminPageFixture';

test.describe('Admin Delete Booking', () => {
  test.beforeEach(async ({ adminPage }) => {
    await adminPage.goto();
  });

  test('Login as admin', async ({ adminPage }) => {
    await adminPage.fillAdminUsername('admin');
    await adminPage.fillAdminPassword('password');
    await adminPage.clickAdminLogin();
  });

});