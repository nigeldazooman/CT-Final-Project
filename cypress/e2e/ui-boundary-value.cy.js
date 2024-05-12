describe("Functional UI Testing with Cypress", () => {
    it("Password Boundary Value Analysis", () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
      cy.get('#signup').click();
      cy.get('#firstName').type('Totally');
      cy.get('#lastName').type('Fake');
      cy.get('#email').type('notreal@test.com');
      cy.get('#password').type('123456');
      cy.get('#submit').click();
      cy.get('#error').should('have.text','User validation failed: password: Path `password` (`123456`) is shorter than the minimum allowed length (7).');
      cy.get('#password').clear().type('1234567');
      cy.get('#submit').click();
      cy.get('h1').should('have.text','Contact List');
})});