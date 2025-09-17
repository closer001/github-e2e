describe('Fluxo de Logout', () => {
    it('Realiza o logout e valida o logout', () => {
        cy.login()
        cy.logout()
    })
})