/// <reference types="cypress"/>

class Details
{
    enterDetails(firstname,lastname,zipcode)
    {
      cy.get("[data-test=firstName]").type(firstname);    // Enter First name
      cy.get("[data-test=lastName]").type(lastname);      // Enter Last name
      cy.get("[data-test=postalCode]").type(zipcode);     // Enter zip code
      cy.get("[data-test=continue]").click();         // Click continue button
    }
}
export default Details