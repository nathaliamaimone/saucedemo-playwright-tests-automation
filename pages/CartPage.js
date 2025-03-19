export class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItemName = page.locator('.inventory_item_name');
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }

    async isItemInCart(itemName) {
        const itemNames = await this.cartItemName.allTextContents();
        return itemNames.includes(itemName);
    }


}