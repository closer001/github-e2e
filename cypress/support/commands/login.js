Cypress.Commands.add("login", () => {
  cy.log("Iniciando login...");

  cy.visit("/login").then(() => {
    cy.log("Página de login carregada");
  });

  cy.get('[name="login"]')
    .should('exist')
    .type(Cypress.env("EMAIL"))
    .then(() => cy.log("Email preenchido"));

  cy.get('[name="password"]')
    .should('exist')
    .type(Cypress.env("SENHA"))
    .then(() => cy.log("Senha preenchida"));

  cy.get('[name="commit"]')
    .should('exist')
    .click()
    .then(() => cy.log("Botão de login clicado"));

  cy.url().should("include", "/").then(() => {
    cy.log("Login realizado com sucesso");
  });
});
