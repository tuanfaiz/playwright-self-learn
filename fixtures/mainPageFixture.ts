import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

type Pages = {
    mainPage: MainPage;
}

export const test = base.extend<Pages>({
    mainPage: async ({ page }, user) => {
        await user(new MainPage(page));
    },
});

export { expect } from '@playwright/test';