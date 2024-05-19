describe("Data-Driven API Testing with Cypress", () => {
  beforeEach(() => {
    cy.login("elymar@fake.com", "Bonito1");
  });
    it("Tests the PATCH Update User API", () => {
      cy.request({
        method: 'PATCH',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users/me',
        headers: {
          'Authorization': "Bearer " +Cypress.env('token'), 
        },
        body: {
            firstName: "Ely",
            lastName: "Mar",
            email: "elymar2@fake.com",
            password: "Bonito2",
        },
    }).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });