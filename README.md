# GitHub E2E Tests

Projeto de testes end-to-end para o GitHub usando Cypress.

## Pré-requisitos

- Node.js instalado
- NPM instalado
- Conta no GitHub

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/closer001/github-e2e
cd github-e2e
```

2. Instale as dependências:
```bash
npm install
```

## Configuração do Ambiente

1. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```properties
EMAIL=seu-email@exemplo.com
SENHA=sua-senha-do-github
USUARIO=seu-usuario-do-github
```
> ⚠️ **Observação:** A conta do GitHub utilizada **não pode ter autenticação de dois fatores (2FA) ativada**, pois os testes automatizados não suportam essa etapa extra de autenticação. 

## Verificação da Configuração

Após configurar o ambiente, execute o teste de verificação para garantir que tudo está configurado corretamente:
```bash
npm test
```

Se o teste passar, significa que suas credenciais estão configuradas corretamente e você pode prosseguir com a execução dos testes E2E.

## Executando os Testes

### Modo Interativo
```bash
npm run cy:open
```

### Executar Todos os Testes
```bash
npm run cy:run
```


### Executar em Navegadores Específicos
```bash
npm run cy:chrome   # Executa no Chrome
npm run cy:firefox  # Executa no Firefox
```

## Screenshots

Os screenshots são salvos automaticamente na pasta `img/` após a criação de um repositório.
