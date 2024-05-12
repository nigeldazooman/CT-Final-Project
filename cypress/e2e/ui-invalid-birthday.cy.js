describe("Functional UI Testing with Cypress", () => {
    it("Tests if the site accepts invalid phone numbers", () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
      cy.get('#email').type('brad@brightskyefarm.com');
      cy.get('#password').type('Lindy11');
      cy.get('#submit').click();
      cy.get(':nth-child(3) > :nth-child(2)').click();
      cy.get('#edit-contact').click();
      cy.get('#birthdate').clear().type('19920202');
      cy.get('#submit').click();
      cy.get('#error').should('have.text','Validation failed: birthdate: Birthdate is invalid');
})});