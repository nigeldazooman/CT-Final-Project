describe("Data-Driven API Testing with Cypress", () => {
  beforeEach(() => {
    cy.login("elymar@fake.com", "Bonito1");
  });
    it("Tests the DELETE User API", () => {
      cy.request({
        method: 'DELETE',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users/me',
        headers: {
          'Authorization': "Bearer " +Cypress.env('token'), 
        },
    }).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });