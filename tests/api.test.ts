import { test, expect } from '@playwright/test';

test('Login as admin using API', async ({ request }) => {
    const response = await request.post('/api/auth/login', {
        data: {
            username: 'admin',
            password: 'password'
        }
    });
    expect(response.ok()).toBeTruthy();
    await expect(response).toBeOK();

    console.log('Status:', response.status());
    console.log('URL:', response.url());
    console.log('Content-Type:', response.headers()['content-type']);
    console.log('Body:', await response.text());

    const body = await response.json();
    expect(body).toHaveProperty('token');
});

