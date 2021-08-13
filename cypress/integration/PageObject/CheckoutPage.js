/// <reference types="cypress"/>

class Checkout
{
    clickFinishButton()
    {
        cy.get("[data-test=finish]").click();
        //cy.get(".title").should('have.text', 'Checkout: Complete!');
    }
}
export default Checkout