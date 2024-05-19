describe("Data-Driven API Testing with Cypress", () => {
  beforeEach(() => {
    cy.login("brad@brightskyefarm.com", "Lindy11");
  });
    it("Tests the PATCH Contact Update API", () => {
      cy.request({
        method: 'PATCH',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/664a583ab237570013e93090',
        headers: {
          'Authorization': "Bearer " +Cypress.env('token'), 
        },
        body: {
            firstName: "Anna",
        },
    }).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });