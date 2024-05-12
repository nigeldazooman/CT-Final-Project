describe("Functional UI Testing with Cypress", () => {
    it("Verifies the presences of a header on contact list", () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
      cy.get('#email').type('brad@brightskyefarm.com');
      cy.get('#password').type('Lindy11');
      cy.get('#submit').click();
      cy.get('h1').should('have.text','Contact List');
})});