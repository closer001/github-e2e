describe("Fluxo de Login", () => {
  it("Realiza o login e valida as informações do usuário", () => {
    cy.login()
    cy.validateUserInfo()
  });
});
