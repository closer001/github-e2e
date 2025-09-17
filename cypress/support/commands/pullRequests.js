Cypress.Commands.add("accessPullRequests", () => {
  cy.log('Acessando aba de Pull Requests...');

  cy.wait(3000);
  
  cy.get('[data-content="Pull requests"]')
    .should('exist')
    .and('be.visible')
    .click()
    .then(() => cy.log('Aba de Pull Requests acessada'));
});
