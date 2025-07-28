Cypress.Commands.add('loginUsuario', () => {
    cy.visit('/login')
    cy.get('[class="login-form"]')
        .contains('Login to your account')
    cy.get('[data-qa="login-email"]')
        .type(Cypress.env('usuario_login'), { log: false })
    cy.get('[data-qa="login-password"]')
        .type(Cypress.env('usuario_senha'), { log: false })
    cy.get('[data-qa="login-button"]')
        .click()
})

Cypress.Commands.add('loginUsuarioInvalido', () => {
    cy.visit('/login')
    cy.get('[class="login-form"]')
        .contains('Login to your account')
    cy.get('[data-qa="login-email"]')
        .type(Cypress.env('login_invalido'), { log: false })
    cy.get('[data-qa="login-password"]')
        .type(Cypress.env('usuario_senha'), { log: false })
    cy.get('[data-qa="login-button"]')
        .click()
})

Cypress.Commands.add('loginSenhaInvalida', () => {
    cy.visit('/login')
    cy.get('[class="login-form"]')
        .contains('Login to your account')
    cy.get('[data-qa="login-email"]')
        .type(Cypress.env('usuario_login'), { log: false })
    cy.get('[data-qa="login-password"]')
        .type(Cypress.env('senha_invalida'), { log: false })
    cy.get('[data-qa="login-button"]')
        .click()
})

Cypress.Commands.add('validaMsgLoginOk', () => {
    cy.get('[class="nav navbar-nav"]')
        .contains('Logged in as Diego Martins')
})

Cypress.Commands.add('validaMsgLogiIncorreto', () => {
    cy.get('[style="color: red;"]')
        .contains('Your email or password is incorrect!')
})