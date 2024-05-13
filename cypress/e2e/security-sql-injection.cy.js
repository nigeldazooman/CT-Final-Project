describe("Security Testing with Cypress", () => {
    it("Tests for SQL Injection Vulnerability", () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
      cy.get('#email').type('" OR 1=1 --');
      cy.get('#submit').click();
      cy.get('#error').should('have.text','Incorrect username or password');
})});