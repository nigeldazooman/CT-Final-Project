describe("Functional UI Testing with Cypress", () => {
    it("Tests the link to the developer site", () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
      cy.get('img').click();
      cy.get('h1').should('have.text','Welcome');
})});
//this test was written knowing that it would fail 