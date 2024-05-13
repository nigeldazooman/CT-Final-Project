describe("Functional UI Testing with Cypress", () => {
    it("Tests the Cancel Button", () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
      cy.get('#email').type('brad@brightskyefarm.com');
      cy.get('#password').type('Lindy11');
      cy.get('#submit').click();
      cy.get(':nth-child(3) > :nth-child(2)').click();
      cy.get('#edit-contact').click();
      cy.get('#cancel').click();
      cy.get('h1').should('have.text','Contact Details');
})});