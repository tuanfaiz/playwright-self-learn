import { type Page, type Locator, expect } from '@playwright/test';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'password';

export class AdminPage {
    readonly page: Page;
    readonly adminUsernameInput: Locator;
    readonly adminPasswordInput: Locator;
    readonly adminLoginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.adminUsernameInput = page.getByRole('textbox', { name: 'Username' });
        this.adminPasswordInput = page.getByRole('textbox', { name: 'Password' });
        this.adminLoginButton = page.getByRole('button', { name: 'Login' });
    }

    async goto() {
        await this.page.goto('/admin');
    }

    async loginAsAdmin() {
        await this.fillAdminUsername(ADMIN_USERNAME);
        await this.fillAdminPassword(ADMIN_PASSWORD);
        await this.clickAdminLogin();
    }

    async fillAdminUsername(username: string) {
        await this.adminUsernameInput.fill(username);
    }

    async fillAdminPassword(password: string) {
        await this.adminPasswordInput.fill(password);
    }

    async clickAdminLogin() {
        await this.adminLoginButton.click();
    }

}