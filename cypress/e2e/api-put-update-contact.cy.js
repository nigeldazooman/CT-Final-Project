describe("Data-Driven API Testing with Cypress", () => {
  beforeEach(() => {
    cy.login("brad@brightskyefarm.com", "Lindy11");
  });
    it("Tests the PUT Contact Update API", () => {
      cy.request({
        method: 'PUT',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/6639521f6d04fb001324a898',
        headers: {
          'Authorization': "Bearer " +Cypress.env('token'), 
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