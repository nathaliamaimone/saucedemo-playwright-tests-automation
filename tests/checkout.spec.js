import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Checkout Tests', () => {
    let inventoryPage;
    let cartPage;
    let checkoutPage;

    test.beforeEach(async ({ page }) => {
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
        checkoutPage = new CheckoutPage(page);
        await page.goto('/inventory.html');
    });

    test('Fill checkout information and proceed to overview', async ({ page }) => {
        await inventoryPage.addItemToCart(inventoryPage.backpackItemAdd);
        expect(await inventoryPage.getCartCount()).toBe(1);
        await inventoryPage.cartIcon.click();
        await expect(page).toHaveURL(/.*cart.html/);
        await cartPage.checkoutButton.click();
        await expect(page).toHaveURL(/.*checkout-step-one.html/);
        await checkoutPage.fillCheckoutInformation('Nathalia', 'Maimone', '12345');
        await checkoutPage.continueButton.click();
        await expect(page).toHaveURL(/.*checkout-step-two.html/);
    });

    test('Make a successful purchase', async ({ page }) => {
        await inventoryPage.addItemToCart(inventoryPage.backpackItemAdd);
        expect(await inventoryPage.getCartCount()).toBe(1);
        await inventoryPage.cartIcon.click();
        await expect(page).toHaveURL(/.*cart.html/);
        await cartPage.checkoutButton.click();
        await expect(page).toHaveURL(/.*checkout-step-one.html/);
        await checkoutPage.fillCheckoutInformation('Nathalia', 'Maimone', '12345');
        await checkoutPage.continueButton.click();
        await expect(page).toHaveURL(/.*checkout-step-two.html/);
        await checkoutPage.finishButton.click();
        await expect(page).toHaveURL(/.*checkout-complete.html/);
        const confirmationMessage = await checkoutPage.getConfirmationMessage();
        expect(confirmationMessage).toContain('Thank you for your order!');
    });
});