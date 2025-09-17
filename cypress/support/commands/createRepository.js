Cypress.Commands.add("createRepository", (repoName) => {
  cy.log('Iniciando criação de repositório...');

  cy.xpath('/html/body/div[1]/div[6]/div/div/aside/div/div/loading-context/div/div[1]/div/div[1]/a')
    .click()
    .then(() => cy.log('Botão de novo repositório clicado'));

  const nomeRepo = repoName || `repo-e2e-${Date.now()}`;
  
  cy.xpath('//*[@id="repository-name-input"]')
    .type(nomeRepo)
    .then(() => cy.log('Nome do repositório preenchido'));

  cy.wait(2000);

  cy.xpath('//button[@type="submit" and .//span[text()="Create repository"]]')
    .scrollIntoView()
    .should('exist')
    .should('be.visible')
    .should('not.be.disabled')
    .click()
    .then(() => cy.log('Botão de criar repositório clicado'));

  cy.xpath('/html/body/div[1]/div[6]/div/main/div/div[1]/div[1]/div[1]/strong/a')
    .should('exist')
    .should('be.visible')
    .should('contain', nomeRepo)
    .then(() => cy.log('Repositório criado com sucesso'));

  cy.url().then((url) => {
    cy.task('takeScreenshot', {
      url: url,
      pathName: `img/repository-${nomeRepo}.png`
    }).then(() => cy.log('Screenshot do repositório salvo'))
  })
});
