import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Inventory Tests', () => {
    let inventoryPage;
  
    test.beforeEach(async ({ page }) => {
        inventoryPage = new InventoryPage(page);
      await page.goto('/inventory.html');
    });
  
    test('Add backpack to cart successfully', async () => {
        await inventoryPage.addItemToCart();
        expect(await inventoryPage.getCartCount()).toBe(1);
      });
    
      test('Remove backpack from cart successfully', async () => {
        await inventoryPage.addItemToCart();
        expect(await inventoryPage.getCartCount()).toBe(1);
        await inventoryPage.removeItemFromCart();
        expect(await inventoryPage.getCartCount()).toBe(0);
      });

      test('Sort products by price low to high', async () => {
        await inventoryPage.sortProducts('lohi');
        expect(await inventoryPage.pricesSorted('lowToHigh')).toBe(true);
      });
    
      test('Sort products by price high to low', async () => {
        await inventoryPage.sortProducts('hilo');
        expect(await inventoryPage.pricesSorted('highToLow')).toBe(true);
      });
});