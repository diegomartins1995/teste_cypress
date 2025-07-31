import { Given, When, Then, Before, After } from '@badeball/cypress-cucumber-preprocessor';

Before({ tags: '@produtos' }, () => {
  cy.loginUsuario();
  cy.validaMsgLoginOk();
});

After(() => {
  cy.telaCarrinho();
  cy.btnExcluiItemDoCarrinho();
  cy.verificaCarrinhoVazio();
});

Given('que o usuário esteja na tela de produtos', () => {
  cy.telaProdutos();
});

When('ele realizar uma pesquisa pelo termo {string}', (termo) => {
  cy.realizaPesquisa(termo);
});

Then('o sistema deve retornar somente o produto {string}', () => {
  cy.validaProdutoBlueTop();
});

Given('que o usuário acesse a pagina inicial da Loja e verifica que o carrinho está vazio', () => {
  cy.visit('/');
  cy.telaCarrinho();
  cy.verificaCarrinhoVazio();
});

When('ele realizar uma pesquisa e incluir o produto {string} no Carrinho', () => {
  cy.telaProdutos();
  cy.realizaPesquisa('Blue Top');
  cy.validaProdutoBlueTop();
  cy.telaDetalheProdutoBlueTop();
  cy.btnAdicionaItemNoCarrinho();
  cy.btncontinuarComprando();
});

Then('o produto {string} deve ser apresentado corretamente no Carrinho', () => {
  cy.telaCarrinho();
  cy.validaCarrinho('Blue Top');
});
