Cypress.Commands.add("logout", () => {
  cy.log("Iniciando logout...");
  
  cy.wait(2000);

  cy.get('.Button-label > .avatar')
    .should('exist')
    .click()
    .then(() => cy.log("Menu do usuário aberto"));

  cy.contains('Sign out')
    .should('be.visible')
    .click()
    .then(() => cy.log("Opção de logout clicada"));

  cy.url().should("include", "/logout");
  
  cy.contains('Sign out')
    .should('be.visible')
    .click();

  cy.url().should("include", "/")
    .then(() => cy.log("Logout realizado com sucesso"));
});
