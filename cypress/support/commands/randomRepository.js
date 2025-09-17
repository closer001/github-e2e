Cypress.Commands.add("accessRandomRepository", () => {
  cy.log('Iniciando acesso a repositório aleatório...');

  cy.wait(2000);

  cy.get('.Button-label > .avatar')
    .click()
    .then(() => cy.log('Menu do usuário aberto'));

  cy.contains('Repositories')
    .click()
    .then(() => cy.log('Aba de repositórios acessada'));

  cy.wait(2000);

  cy.get('#user-repositories-list > ul > li h3 a')
  .should('have.length.gt', 0)
  .then($repos => {
    const count = $repos.length;
    const randomIndex = Math.floor(Math.random() * count);
    const $randomRepo = $repos.eq(randomIndex);
    
    const href = $randomRepo.prop('href');

    cy.visit(href).then(() => {
      cy.log('Repositório acessado com sucesso');
    });
  });

});
