export class InventoryPage {
    constructor(page) {
        this.page = page;
        this.backpackItemAdd = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.backpackItemRemove = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.sortDropdown = page.locator('[data-test="product-sort-container"]')
        this.productPrices = page.locator('[data-test="inventory-item-price"]')
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

    async sortProducts(option) {
        await this.sortDropdown.waitFor({ state: 'visible' });
        await this.sortDropdown.selectOption(option);
      }

      async getFirstFiveProductPrices() {
        const prices = await this.productPrices.allTextContents();
        const numericPrices = prices.map(price => parseFloat(price.replace('$', '')));
        const firstFivePrices = numericPrices.slice(0, 5);
        console.log('5 primeiros preços (números):', firstFivePrices);
        return firstFivePrices;
      }
      
      async pricesSortedLowToHigh() {
        const firstFivePrices = await this.getFirstFiveProductPrices();

        const isSorted = firstFivePrices.every((price, index) => {
            if (index === 0) return true;
            // Comparando se o preço atual é maior ou igual ao preço anterior
            const isGreaterOrEqual = price >= firstFivePrices[index - 1];
            console.log(`Comparando: ${firstFivePrices[index - 1]} <= ${price} => ${isGreaterOrEqual}`);
            return isGreaterOrEqual;
          });
          return isSorted;
      }
  }