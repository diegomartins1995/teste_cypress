
describe('Cenários Login', () => {

  /*01- Scenario: Usuário faz login com sucesso
    Given que o usuário está na página de login
    When ele preenche o campo "Email Adress" corretamente e o campo "Password" com uma senha válida
    And clica no botão "Login"
    Then ele deve ver a mensagem "Logged in as Diego Martins"
  */

  it('01 - Login realizado com sucesso', () => {
    cy.loginUsuario()
    cy.validaMsgLoginOk()
  })

  /*02- Scenario: Tentátiva de login com usuário inválido
  Given que o usuário está na página de login
  When ele preenche o campo "Email Adress" com um e-mail inválido e o campo "Password" com uma senha válida
  And clica no botão "Login"
  Then ele deve ver a mensagem "Your email or password is incorrect"
 */

  it('02 - Tentativa de Login com usuário inválido', () => {
    cy.loginUsuarioInvalido()
    cy.validaMsgLogiIncorreto()
  })

  /*03- Scenario: Tentátiva de login com senha inválida
  Given que o usuário está na página de login
  When ele preenche o campo "Email Adress" com um e-mail válido e o campo "Password" com uma senha incorreta
  And clica no botão "Login"
  Then ele deve ver a mensagem "Your email or password is incorrect"
 */

  it('03 - Tentativa de Login com senha inválida', () => {
    cy.loginSenhaInvalida()
    cy.validaMsgLogiIncorreto()
  })

})