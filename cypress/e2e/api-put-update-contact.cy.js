describe("Data-Driven API Testing with Cypress", () => {
    it("Tests the PUT Contact Update API", () => {
      cy.request({
        method: 'PUT',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/6639521f6d04fb001324a898',
        headers: {
          'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI4M2QwMDNhM2NiODAwMTNhZGYwMWYiLCJpYXQiOjE3MTUyOTQ5NTV9.5MNVIURl1CYrRbvfj-c8KCB0rEd35HuPO_pSuntArwE", 
        },
        body: {
            firstName: "Amy",
            lastName: "Miller",
            birthdate: "1992-02-02",
            email: "amiller@fake.com",
            phone: "8005554242",
            street1: "13 School St.",
            street2: "Apt. 5",
            city: "Washington",
            stateProvince: "QC",
            postalCode: "43555",
            country: "Canada"
        },
    }).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });