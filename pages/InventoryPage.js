export class InventoryPage {
    constructor(page) {
      this.page = page;
      this.backpackItemAdd = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
      this.backpackItemRemove = page.locator('[data-test="remove-sauce-labs-backpack"]');
      this.cartBadge = page.locator('.shopping_cart_badge');
    }
  
    async addItemToCart() {
      await this.backpackItemAdd.click();
    }
  
    async getCartCount() {
      if (await this.cartBadge.isVisible()) {
        const countText = await this.cartBadge.textContent();
        return parseInt(countText, 10);
      } else {
        return 0;
      }
    }
  
    async removeItemFromCart() {
      await this.backpackItemRemove.click();
    }
  }