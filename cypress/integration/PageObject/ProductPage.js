/// <reference types="cypress"/>
let productname; 
class ProductPage
{
    productName()
    {
        cy.get("#item_4_title_link")
        .then(($product) => {
        productname = ($product.text())
        })
        return productname;
    }
    addToCart()
    {
        cy.get("[data-test=add-to-cart-sauce-labs-backpack]").click()
    }
}
export default ProductPage