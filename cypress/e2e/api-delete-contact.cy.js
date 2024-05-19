describe("Data-Driven API Testing with Cypress", () => {
  beforeEach(() => {
    cy.login("brad@brightskyefarm.com", "Lindy11");
  });
    it("Tests the DELETE Contact API", () => {
      cy.request({
        method: 'DELETE',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/663acd1e2a24e600139afe47',
        headers: {
          'Authorization': "Bearer " +Cypress.env('token'), 
        },
    }).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });