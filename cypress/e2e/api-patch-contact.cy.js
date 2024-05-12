describe("Data-Driven API Testing with Cypress", () => {
    it("Tests the PATCH Contact Update API", () => {
      cy.request({
        method: 'PATCH',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/6639521f6d04fb001324a898',
        headers: {
          'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI4M2QwMDNhM2NiODAwMTNhZGYwMWYiLCJpYXQiOjE3MTUyOTQ5NTV9.5MNVIURl1CYrRbvfj-c8KCB0rEd35HuPO_pSuntArwE", 
        },
        body: {
            firstName: "Anna",
        },
    }).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });