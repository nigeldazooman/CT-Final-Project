it("GET API test to update a contact", () => {
    cy.visit("https://thinking-tester-contact-list.herokuapp.com/");
    cy.get("#email").type("brad@brightskyefarm.com");
    cy.get("#password").type("Lindy11");
    cy.get("form").submit();

    cy.request({
      method: 'PUT',
      url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
      headers: {
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI4M2QwMDNhM2NiODAwMTNhZGYwMWYiLCJpYXQiOjE3MTUwMzI1NDF9.Q4Qch8k6Qk716rKO9Vz0d0cucDB3LUNq4qOf2TebZA4", 
      },
      body: {
        firstName: "Amy",
        lastName: "Miller",
        birthdate: "1992-02-02",
        email: "amiller@fake.com",
        phone: "8005554343",
        street1: "13 School St",
        street2: "Apt. 5",
        city: "Washington",
        state: "QC",
        postalCode: "A1B2D4",
        country: "Canada",
      }
    }).should((response) => {
      expect(response.status).to.eq(200);
    });
  });