describe('Acessa um repositório aleatório e vai para Pull Requests', () => {
    it('Navega até a aba Repositories, acessa um repositório aleatório e vai para Pull Requests', () => {
        cy.login()
        cy.accessRandomRepository()
        cy.accessPullRequests()
    })
})