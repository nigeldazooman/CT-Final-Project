describe("Data-Driven API Testing with Cypress", () => {
  beforeEach(() => {
    cy.login("brad@brightskyefarm.com", "Lindy11");
  });
    it("Tests the GET User Profile API", () => {
      cy.request({
        method: 'GET',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users/me',
        headers: {
          'Authorization': "Bearer " +Cypress.env('token'), 
        },
      }).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });