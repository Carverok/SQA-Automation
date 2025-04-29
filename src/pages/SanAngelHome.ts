import { expect, type Locator, type Page } from "@playwright/test";

export class SanAngelHome {
  readonly page: Page;
  readonly versallesProductLink: Locator;
  readonly evoraProductLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.versallesProductLink = page.getByRole("link", {
      name: "arreglo floral versalles",
    });
    this.evoraProductLink = page.getByRole("link", {
      name: "cilindro con 24 rosas",
    });
  }

  async goto() {
    await this.page.goto("https://sanangel.com.co/");
  }

  async selectProduct(productName: string) {
    // use switch case to select item
    switch (productName) {
      case "arreglo floral versalles":
        await this.versallesProductLink.click();
        break;
      case "cilindro con 24 rosas":
        await this.evoraProductLink.click();
        break;
      default:
        throw new Error(`Product "${productName}" not found.`);
    }
  }
}
