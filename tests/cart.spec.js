import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test.describe('Cart Tests', () => {
    let inventoryPage;
    let cartPage;

    test.beforeEach(async ({ page }) => {
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
        await page.goto('/inventory.html');
    });

    test('View item in cart successfully', async ({ page }) => {
        await inventoryPage.addItemToCart(inventoryPage.backpackItemAdd);
        expect(await inventoryPage.getCartCount()).toBe(1);
        await inventoryPage.cartIcon.click();
        await expect(page).toHaveURL(/.*cart.html/);
        const isItemInCart = await cartPage.isItemInCart('Sauce Labs Backpack');
        expect(isItemInCart).toBe(true);
    });

    test('Remove item from cart successfully', async ({ page }) => {
        await inventoryPage.addItemToCart(inventoryPage.backpackItemAdd);
        expect(await inventoryPage.getCartCount()).toBe(1);
        await inventoryPage.cartIcon.click();
        await expect(page).toHaveURL(/.*cart.html/);
        await cartPage.removeBackpackFromCart();
        const isItemInCart = await cartPage.isItemInCart('Sauce Labs Backpack');
        expect(isItemInCart).toBe(false);
    });
});