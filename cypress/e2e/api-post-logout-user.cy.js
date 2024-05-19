describe("Data-Driven API Testing with Cypress", () => {
  beforeEach(() => {
    cy.login("brad@brightskyefarm.com", "Lindy11");
  });
    it("Tests the POST Logout User API", () => {
      cy.request({
        method: 'POST',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users/logout',
        headers: {
          'Authorization': "Bearer " +Cypress.env('token'), 
        },
      }).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });