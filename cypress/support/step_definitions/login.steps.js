import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que o usuário está na página de login', () => {
  cy.visit('/login');
});

When('ele realiza o login válido', () => {
  cy.loginUsuario(); 
});

When('ele realiza o login com usuário inválido', () => {
  cy.loginUsuarioInvalido(); 
});

When('ele realiza o login com senha inválida', () => {
  cy.loginSenhaInvalida();
});

Then('ele deve ver a mensagem {string}', (msg) => {
  if (msg === 'Logged in as Diego Martins') {
    cy.validaMsgLoginOk();
  } else if (msg === 'Your email or password is incorrect') {
    cy.validaMsgLogiIncorreto();
  } else {
    cy.contains(msg).should('be.visible');
  }
});
