Feature: Login do usuário

  Scenario: Login válido
    Given que o usuário está na página de login
    When ele preenche corretamente os dados de login válidos
    Then ele deve ver a mensagem de login bem-sucedido

  Scenario: Login com e-mail inválido
    Given que o usuário está na página de login
    When ele preenche o e-mail inválido e senha válida
    Then ele deve ver a mensagem de erro de login

  Scenario: Login com senha inválida
    Given que o usuário está na página de login
    When ele preenche o e-mail válido e senha inválida
    Then ele deve ver a mensagem de erro de login