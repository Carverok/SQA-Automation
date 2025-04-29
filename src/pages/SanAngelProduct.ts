import { expect, type Locator, type Page } from "@playwright/test";

export class SanAngelProduct {
  readonly page: Page;

  readonly quantityInput: Locator;
  readonly addTocartButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Initialize locators for the product page
    this.quantityInput = page.getByRole("spinbutton", { name: "Qty" });
    this.addTocartButton = page.getByRole("button", {
      name: "Añadir al carrito",
    });
  }

  async verifyProductName(productName: string) {
    // Verify the product name in the product page
    const productNameLocator = this.page.getByRole("heading", {
      name: productName,
    });
    await expect(productNameLocator).toBeVisible();
  }

  async addProductToCart(quantity: number) {
    // Fill the quantity input and click the add to cart button
    await this.quantityInput.fill(quantity.toString());
    await this.addTocartButton.click();
  }
}
