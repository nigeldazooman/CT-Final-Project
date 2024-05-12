describe("Data-Driven API Testing with Cypress", () => {
    it("Tests the POST Login User API", () => {
      cy.request({
        method: 'POST',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users/login',
        headers: {
          'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxMDU5NjVkNzJmNzAwMTM5ZjliZTEiLCJpYXQiOjE3MTU1NDI2MzB9.h092bef6a4Z7YAEWUA8WuN4SJdDqFKq1x8bKwDysdwc", 
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