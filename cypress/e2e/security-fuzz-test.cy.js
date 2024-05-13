describe("Security Testing with Cypress", () => {
    it("Fuzz Test for Login", () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
      cy.get('#email').type('uSer!186gh?toa0^.ay1#');
      cy.get('#password').type('$asju*!?nj`984{,h44%;ga');
      cy.get('#submit').click();
      cy.get('#error').should('have.text','Incorrect username or password');
})});