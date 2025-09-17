const config = require("../config");

describe('Validação das variáveis de ambiente', () => {
  test("variáveis de ambiente devem estar definidas", () => {
    expect(config.EMAIL).toBeDefined();
    expect(config.SENHA).toBeDefined();
    expect(config.USUARIO).toBeDefined();
  });

});
