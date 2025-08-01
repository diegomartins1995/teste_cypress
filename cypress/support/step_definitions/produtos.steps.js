import { Given, When, Then, Before, After } from '@badeball/cypress-cucumber-preprocessor';

Before({ tags: '@produtos' }, () => {
  cy.loginUsuario();
  cy.validaMsgLoginOk();
});

After({ tags: '@produtos' }, () => {
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

Then('o sistema deve retornar somente o produto {string}', (produto) => {
  cy.contains(produto);
});

Given('que o usuário acesse a pagina inicial da Loja e verifica que o carrinho está vazio', () => {
  cy.visit('/');
  cy.telaCarrinho();
  cy.verificaCarrinhoVazio();
});

When('ele realizar uma pesquisa e incluir o produto {string} no Carrinho', (produto) => {
  cy.telaProdutos();
  cy.realizaPesquisa(produto);
  cy.contains(produto);
  cy.visit('/product_details/1');
  cy.get('.product-information')
    .contains('Category: Women > Tops');
  cy.get('.btn.btn-default.cart')
    .click();
  cy.btncontinuarComprando();
});

Then('o produto {string} deve ser apresentado corretamente no Carrinho', (produto) => {
  cy.telaCarrinho();
  cy.contains(produto);
});
