import { Given, When, Then, Before, After } from '@badeball/cypress-cucumber-preprocessor';


Before(() => {
  cy.loginUsuario();
  cy.validaMsgLoginOk();
});

After(() => {
  cy.telaCarrinho();
  cy.btnExcluiItemDoCarrinho();
  cy.verificaCarrinhoVazio();
});

//Scenario 1
Given('que o usuário esteja na tela de produtos', () => {
  cy.telaProdutos();
});

When('ele realizar uma pesquisa pelo termo {string}', () => {
  cy.realizaPesquisa('Blue Top');
});

When('clicar no botão Pesquisar', () => {
});

Then('o sistema deve retornar somente o produto {string}', () => {
  cy.validaProdutoPesquisado('Blue Top');
});

//Scenario 2
Given('que o usuário esteja na tela de produtos', () => {
  cy.telaProdutos();
});

When('ele realizar uma pesquisa pelo termo {string}', () => {
  cy.realizaPesquisa('Summer White Top');
});

When('clicar no botão Pesquisar', () => {
});

Then('o sistema deve retornar somente o produto {string}', () => {
  cy.validaProdutoPesquisado('Summer White Top');
});

//Scenario 3
Given('que o usuário acesse a página inicial da Loja', () => {
});

Given('verifica que o carrinho está vazio', () => {
  cy.telaCarrinho();
  cy.verificaCarrinhoVazio();
});

When('ele adicionar os produtos {string} e {string} no carrinho', () => {
  cy.telaProdutos();
  cy.realizaPesquisa('Blue Top');
  cy.validaProdutoPesquisado('Blue Top');
  cy.verDetalhesProduto(1);
  cy.btnAdicionarAoCarrinho();
  cy.btncontinuarComprando();
  cy.telaProdutos();
  cy.realizaPesquisa('Summer White Top');
  cy.validaProdutoPesquisado('Summer White Top');
  cy.verDetalhesProduto(6);
  cy.btnAdicionarAoCarrinho();
  cy.btncontinuarComprando();
});

When('acessar a página do carrinho', () => {
  cy.telaCarrinho();
});

Then('os dois produtos adicionados devem ser apresentados corretamente', () => {
  cy.validaCarrinho('Blue Top');
  cy.validaCarrinho('Summer White Top');
});
