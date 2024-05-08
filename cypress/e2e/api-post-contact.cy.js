it("POST API test to add contact", () => {
  cy.visit("https://thinking-tester-contact-list.herokuapp.com/");
  cy.get("#email").type("brad@brightskyefarm.com");
  cy.get("#password").type("Lindy11");
  cy.get("form").submit();

  cy.get("#add-contact").click();

  cy.request({
    method: 'POST',
    url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
    headers: {
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI4M2QwMDNhM2NiODAwMTNhZGYwMWYiLCJpYXQiOjE3MTUwMzI1NDF9.Q4Qch8k6Qk716rKO9Vz0d0cucDB3LUNq4qOf2TebZA4", 
    },
    body: {
      firstName: "John",
      lastName: "Doe",
      birthdate: "1970-01-01",
      email: "jdoe@fake.com",
      phone: "8005554242",
      street1: "1 Main Street",
      street2: "Apartment A",
      city: "Anytown",
      state: "KS",
      postalCode: "12345",
      country: "USA",
    }
  }).should((response) => {
    expect(response.status).to.eq(201);
  });
});