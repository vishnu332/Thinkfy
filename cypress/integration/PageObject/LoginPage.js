/// <reference types="cypress"/>

class LoginPage
{
    userLogin(username,password)
    {
        cy.visit('https://www.saucedemo.com/');
        cy.get("[data-test=username]").type(username);          // Enter username
        cy.get("[data-test=password]").type(password);          // Enter Password
        cy.get("[data-test=login-button]").click();             // Click on login button
    }
}
export default LoginPage