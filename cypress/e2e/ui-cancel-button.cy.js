describe("Functional UI Testing with Cypress", () => {
  it("Tests the Cancel Button", () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    // Login
    cy.get('#email').type('brad@brightskyefarm.com');
    cy.get('#password').type('Lindy11');
    cy.get('#submit').click();
    // Wait for the contact list to be fetched and rendered
    cy.intercept('GET', '**/contacts').as('getContacts');
    cy.wait('@getContacts');
    // Wait for the element to be visible and interact
    cy.get(':nth-child(3) > :nth-child(2)', { timeout: 10000 }).should('be.visible').then(($el) => {
      cy.wrap($el).click();
    });
    // Edit contact
    cy.get('#edit-contact', { timeout: 10000 }).should('be.visible').then(($el) => {
      cy.wrap($el).click();
    });
    // Cancel edit
    cy.get('#cancel', { timeout: 10000 }).should('be.visible').then(($el) => {
      cy.wrap($el).click();
    });
    // Verify the text
    cy.get('h1', { timeout: 10000 }).should('have.text', 'Contact Details');
  });
});





