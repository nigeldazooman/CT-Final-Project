describe("Data-Driven API Testing with Cypress", () => {
  it("Tests the POST Contact API", () => {
    cy.request({
      method: 'POST',
      url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
      headers: {
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI4M2QwMDNhM2NiODAwMTNhZGYwMWYiLCJpYXQiOjE3MTUyNjk1MTB9.W_XhOzqoZEwBgEGnb07zMo15GK9v7bcqEMFrP1v99Q8", 
      },
      body: {
        firstName: "Juan",
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
});