Feature: Cenários Login

  Scenario: Usuário faz login com sucesso
    Given que o usuário está na página de login
    When ele realiza o login válido
    Then ele deve ver a mensagem "Logged in as Diego Martins"

  Scenario: Tentativa de login com usuário inválido
    Given que o usuário está na página de login
    When ele realiza o login com usuário inválido
    Then ele deve ver a mensagem "Your email or password is incorrect"

  Scenario: Tentativa de login com senha inválida
    Given que o usuário está na página de login
    When ele realiza o login com senha inválida
    Then ele deve ver a mensagem "Your email or password is incorrect"