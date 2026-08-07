import { test } from '../../fixtures/adminPageFixture';

test.describe('Admin Delete Booking', () => {
  
  test.beforeEach(async ({ adminPage }) => {
    await adminPage.goto();
    await adminPage.loginAsAdmin();
  });

  test('Verify In Admin Page', async ({ adminPage }) => {
    await adminPage.verifyAdminPageHeader();
  });

});