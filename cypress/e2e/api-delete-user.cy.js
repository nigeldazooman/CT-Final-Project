describe("Data-Driven API Testing with Cypress", () => {
    it("Tests the DELETE User API", () => {
      cy.request({
        method: 'DELETE',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users/me',
        headers: {
          'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxMDU5NjVkNzJmNzAwMTM5ZjliZTEiLCJpYXQiOjE3MTU1NDI2MzB9.h092bef6a4Z7YAEWUA8WuN4SJdDqFKq1x8bKwDysdwc", 
        },
    }).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });