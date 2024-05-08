it("GET API test to open contact list", () => {
    cy.visit("https://thinking-tester-contact-list.herokuapp.com/");
    cy.get("#email").type("brad@brightskyefarm.com");
    cy.get("#password").type("Lindy11");
    cy.get("form").submit();
   
    cy.request({
      method: 'GET',
      url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
      headers: {
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI4M2QwMDNhM2NiODAwMTNhZGYwMWYiLCJpYXQiOjE3MTUwMzI1NDF9.Q4Qch8k6Qk716rKO9Vz0d0cucDB3LUNq4qOf2TebZA4", 
      },
    }).should((response) => {
      expect(response.status).to.eq(200);
    });
  });