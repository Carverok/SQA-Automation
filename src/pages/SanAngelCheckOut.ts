import { expect, type Locator, type Page } from "@playwright/test";

export class SanAngelCheckOut {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyCheckoutPage() {
    await expect(this.page).toHaveURL(
      "https://sanangel.com.co/finalizar-compra/"
    );
  }
}
