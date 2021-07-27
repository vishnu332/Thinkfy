/// <reference types="cypress"/>
import LoginPage from '../PageObject/LoginPage'
import ProductPage from '../PageObject/ProductPage'
import CartPage from '../PageObject/CartPage'
import Details from '../PageObject/InformationPage'
import Checkout from '../PageObject/CheckoutPage'
describe('Swag Labs', () => {
    it('Purchasing a product', () => {
      let login = new LoginPage();
      login.userLogin("standard_user", "secret_sauce");
      let product = new ProductPage();
      product.productName();
      product.addToCart();
      let cart = new CartPage();
      cart.clickCartButton();
      cart.productName();
      cart.checkoutButton();
      let info = new Details();
      info.enterDetails("First name","Last name", "000000");
      let checkout = new Checkout();
      checkout.clickFinishButton();
    })
})