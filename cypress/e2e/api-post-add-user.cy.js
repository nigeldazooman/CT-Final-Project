describe("Data-Driven API Testing with Cypress", () => {
  beforeEach(() => {
    cy.login("brad@brightskyefarm.com", "Lindy11");
  });
    it("Tests the POST Add User API", () => {
      cy.request({
        method: 'POST',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users',
        headers: {
          'Authorization': "Bearer " +Cypress.env('token'), 
        },
        body: {
          firstName: "Elida",
          lastName: "Amador",
          email: "elymar@fake.com",
          password: "Bonito1"
        }
      }).should((response) => {
        expect(response.status).to.eq(201);
      });
    });
  });