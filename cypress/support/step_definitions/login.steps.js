import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que o usuário está na página de login', () => {
});

When('ele preenche corretamente os dados de login válidos', () => {
  cy.loginUsuario();
});

Then('ele deve ver a mensagem de login bem-sucedido', () => {
  cy.validaMsgLoginOk();
});

When('ele preenche o e-mail inválido e senha válida', () => {
  cy.loginUsuarioInvalido();
});

Then('ele deve ver a mensagem de erro de login', () => {
  cy.validaMsgLogiIncorreto();
});

When('ele preenche o e-mail válido e senha inválida', () => {
  cy.loginSenhaInvalida();
});

