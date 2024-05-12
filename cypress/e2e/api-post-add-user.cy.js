describe("Data-Driven API Testing with Cypress", () => {
    it("Tests the POST Add User API", () => {
      cy.request({
        method: 'POST',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users',
        headers: {
          'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI4M2QwMDNhM2NiODAwMTNhZGYwMWYiLCJpYXQiOjE3MTU1NDEzNDh9._h_LliluOrpsLPdhPhtcM45gnxPJS9VHpjcyoG5Y1b8", 
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