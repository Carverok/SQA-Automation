import { test } from "@playwright/test";
import { SanAngelHome } from "../src/pages/SanAngelHome";
import { SanAngelProduct } from "../src/pages/SanAngelProduct";
import { SanAngelCheckOut } from "../src/pages/SanAngelCheckOut";

test.beforeEach(async ({ page }) => {
  const sanAngelHome = new SanAngelHome(page);
  await sanAngelHome.goto();
});

test.afterEach(async ({ page }) => {
  const sanAngelCheckOut = new SanAngelCheckOut(page);
  await sanAngelCheckOut.verifyCheckoutPage();
});

test("Add first product to the cart", async ({ page }) => {
  // Add a test annotation to provide metadata
  test.info().annotations.push({
    type: "Test",
    description:
      "This test aims to verify that the product: Versalles is added to the cart, and the quantity is set to 2.",
  });

  const sanAngelHome = new SanAngelHome(page);
  await sanAngelHome.selectProduct("arreglo floral versalles");

  const sanAngelProduct = new SanAngelProduct(page);
  await sanAngelProduct.verifyProductName("Versalles");
  await sanAngelProduct.addProductToCart(2);
});

test("Add second product to the cart", async ({ page }) => {
  test.info().annotations.push({
    type: "Test",
    description:
      "This test aims to verify that the product: Évora – 24 rosas is added to the cart, and the quantity is set to 2.",
  });

  const sanAngelHome = new SanAngelHome(page);
  await sanAngelHome.selectProduct("cilindro con 24 rosas");

  const sanAngelProduct = new SanAngelProduct(page);
  await sanAngelProduct.verifyProductName("Évora – 24 rosas");
  await sanAngelProduct.addProductToCart(5);
});
