describe("Data-Driven API Testing with Cypress", () => {
    it("Tests the PATCH Update User API", () => {
      cy.request({
        method: 'PATCH',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users/me',
        headers: {
          'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxMDU5NjVkNzJmNzAwMTM5ZjliZTEiLCJpYXQiOjE3MTU1NDIyMTV9.ShT71fcNgDogiCp3QWTxQX8kmP_IJFavZAFbNEPXUrw", 
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