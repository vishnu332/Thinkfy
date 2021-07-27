/// <reference types="cypress"/>
import ProductPage from "./ProductPage";
class CartPage
{
    clickCartButton()
    {
        cy.get(".shopping_cart_badge").click();
    }
    productName()
    {
       let product = new ProductPage();
       cy.get(".inventory_item_name")
       .then(($name) => {
       let productname = ($name.text())
       expect(productname).to.equal(product.productName());
      })
    }
    checkoutButton()
    {
        cy.get("[data-test=checkout]").click();
    }
}
export default CartPage