describe("Data-Driven API Testing with Cypress", () => {
    it("Tests the GET User Profile API", () => {
      cy.request({
        method: 'GET',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users/me',
        headers: {
          'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI4M2QwMDNhM2NiODAwMTNhZGYwMWYiLCJpYXQiOjE3MTU1NDEzNDh9._h_LliluOrpsLPdhPhtcM45gnxPJS9VHpjcyoG5Y1b8", 
        },
      }).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });