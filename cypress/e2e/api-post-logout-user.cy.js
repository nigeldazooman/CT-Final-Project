describe("Data-Driven API Testing with Cypress", () => {
    it("Tests the POST Logout User API", () => {
      cy.request({
        method: 'POST',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users/logout',
        headers: {
          'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxMDU5NjVkNzJmNzAwMTM5ZjliZTEiLCJpYXQiOjE3MTU1NDI0Mzd9.Nj5CqC7_yG05o2j6gkLQo6a4iZOfKrRYPTSra-KTvIg", 
        },
      }).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });