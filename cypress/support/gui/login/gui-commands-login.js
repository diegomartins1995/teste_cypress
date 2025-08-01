import { LoginPage } from '../../page_objects/LoginPage';

Cypress.Commands.add('loginUsuario', () => {
    cy.visit(LoginPage.url);
    cy.get(LoginPage.formLogin)
        .contains(LoginPage.tituloLogin);
    cy.get(LoginPage.inputEmail)
        .type(Cypress.env('usuario_login'), { log: false });
    cy.get(LoginPage.inputSenha)
        .type(Cypress.env('usuario_senha'), { log: false });
    cy.get(LoginPage.botaoLogin)
        .click();
});

Cypress.Commands.add('loginUsuarioInvalido', () => {
    cy.visit(LoginPage.url);
    cy.get(LoginPage.formLogin)
        .contains(LoginPage.tituloLogin);
    cy.get(LoginPage.inputEmail)
        .type(Cypress.env('login_invalido'), { log: false });
    cy.get(LoginPage.inputSenha)
        .type(Cypress.env('usuario_senha'), { log: false });
    cy.get(LoginPage.botaoLogin)
        .click();
});

Cypress.Commands.add('loginSenhaInvalida', () => {
    cy.visit(LoginPage.url);
    cy.get(LoginPage.formLogin)
        .contains(LoginPage.tituloLogin);
    cy.get(LoginPage.inputEmail)
        .type(Cypress.env('usuario_login'), { log: false });
    cy.get(LoginPage.inputSenha)
        .type(Cypress.env('senha_invalida'), { log: false });
    cy.get(LoginPage.botaoLogin)
        .click();
});

Cypress.Commands.add('validaMsgLoginOk', () => {
    cy.get(LoginPage.navLogado)
        .contains(LoginPage.textoUsuarioLogado);
});

Cypress.Commands.add('validaMsgLogiIncorreto', () => {
    cy.get(LoginPage.mensagemErro)
        .contains(LoginPage.textoErroLogin);
});