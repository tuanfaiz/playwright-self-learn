import { test as base } from '@playwright/test';
import { AdminPage } from  '../pages/AdminPage';

type Pages = {
    adminPage: AdminPage;
}

export const test = base.extend<Pages>({
    adminPage: async ({ page }, user) => {
        await user(new AdminPage(page));
    },
});

export { expect } from '@playwright/test';