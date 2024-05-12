describe("Data-Driven API Testing with Cypress", () => {
    it("Tests the GET Individual Contact API", () => {
      cy.request({
        method: 'GET',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/',
        headers: {
          'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI4M2QwMDNhM2NiODAwMTNhZGYwMWYiLCJpYXQiOjE3MTUyNjk1MTB9.W_XhOzqoZEwBgEGnb07zMo15GK9v7bcqEMFrP1v99Q8", 
        },
      }).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });