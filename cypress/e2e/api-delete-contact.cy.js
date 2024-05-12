describe("Data-Driven API Testing with Cypress", () => {
    it("Tests the DELETE Contact API", () => {
      cy.request({
        method: 'DELETE',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/663acd1e2a24e600139afe47',
        headers: {
          'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI4M2QwMDNhM2NiODAwMTNhZGYwMWYiLCJpYXQiOjE3MTUyOTQ5NTV9.5MNVIURl1CYrRbvfj-c8KCB0rEd35HuPO_pSuntArwE", 
        },
    }).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });