Cypress.Commands.add("validateUserInfo", () => {
    cy.log("Iniciando validação do usuário...");

    cy.wait(2000);

    cy.log("Abrindo menu do usuário");
    cy.get('.Button-label > .avatar')
        .should('be.visible')
        .click();

    cy.log("Verificando se a opção de configurações está visível");
    cy.contains('Settings')
        .should('be.visible');

    cy.log("Validando nome de usuário exibido no perfil");
    cy.get('.text-bold > .prc-Truncate-Truncate-A9Wn6')
        .should('exist')
        .and('be.visible')
        .and('contain', Cypress.env('USUARIO'));

    cy.log("Fechando menu do usuário");
    cy.get('.Button-label > .avatar')
        .click();

    cy.log("Validação do usuário concluída com sucesso");
});
