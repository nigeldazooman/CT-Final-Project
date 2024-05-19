describe("Data-Driven API Testing with Cypress", () => {
  beforeEach(() => {
    cy.login("brad@brightskyefarm.com", "Lindy11");
  });
  it("Tests the GET Individual Contact API", () => {
      cy.request({
        method: 'GET',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/',
        headers: {
          'Authorization': "Bearer " +Cypress.env('token'), 
        },
      }).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });