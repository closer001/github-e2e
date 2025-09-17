Cypress.Commands.add("createRepository", (repoName) => {
  cy.log('Iniciando criação de repositório...');

  cy.wait(2000);

  cy.xpath('//*[@data-target="loading-context.details"]//div[contains(@class,"Details")]/div[contains(@class,"js-repos-container")]//a[contains(@class,"Button--primary")]')
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

  cy.wait(2000)

  cy.xpath('//div[@id="repo-title-component"]//strong[@itemprop="name"]/a')
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
