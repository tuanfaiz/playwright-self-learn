import { type Page, type Locator, expect } from '@playwright/test';

export class MainPage {
    readonly page: Page;
    readonly mainHeading: Locator;
    readonly bookNowLink: Locator;
    readonly checkAvailabilityHeader: Locator;
    readonly checkAvailabilityButton: Locator;
    readonly checkinInput: Locator;
    readonly checkoutInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.mainHeading = page.getByRole('heading', { name: 'Welcome to Shady Meadows B&B'});
        this.bookNowLink = page.locator('.hero').getByRole('link', { name: 'Book Now' });
        this.checkAvailabilityHeader = page.getByRole('heading', { name: 'Check Availability & Book Your Stay', level: 3 });
        this.checkAvailabilityButton = page.getByRole('button', { name: 'Check Availability' });
        this.checkinInput = page.getByRole('textbox').first();
        this.checkoutInput = page.getByRole('textbox').nth(1);
    }

    async goto() {
        await this.page.goto('/');
    }

    async verifyMainHeader() {
        await expect(this.mainHeading).toBeVisible();
    }

    async clickBookNow() {
        // after clicking the "Book Now" link, we expect the URL to change to 
        // include "#booking" and scroll to the boookings section
        await this.bookNowLink.click();
    }

    async clickCheckAvailability() {
        await this.checkAvailabilityButton.click();
    }

    async fillCheckinDate(date: string) {
        await this.checkinInput.fill(date);
    }

    async fillCheckoutDate(date: string) {
        await this.checkoutInput.fill(date);
    }

}