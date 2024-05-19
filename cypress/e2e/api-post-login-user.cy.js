describe("Data-Driven API Testing with Cypress", () => {
  beforeEach(() => {
    cy.login("brad@brightskyefarm.com", "Lindy11");
  });
    it("Tests the POST Login User API", () => {
      cy.request({
        method: 'POST',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users/login',
        headers: {
          'Authorization': "Bearer " +Cypress.env('token'), 
        },
        body: {
            email: "elymar2@fake.com",
            password: "Bonito2"
          }
      }).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });