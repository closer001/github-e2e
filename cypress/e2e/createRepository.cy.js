describe('Cria um repositório e tira um print', () => {
    it('Cria um repositório novo e tira um print da tela', () => {
        cy.login()
        cy.createRepository()
    })
})