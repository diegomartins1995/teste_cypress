
@produtos
Feature: Validação de pesquisa de produtos e produtos no carrinho

  Scenario: Usuário realiza busca pelo Produto "Blue Top"
    Given que o usuário esteja na tela de produtos
    When ele realizar uma pesquisa pelo termo "Blue Top"
    Then o sistema deve retornar somente o produto "Blue Top"

  Scenario: Usuário inclui produto "Blue Top" no carrinho
    Given que o usuário acesse a pagina inicial da Loja e verifica que o carrinho está vazio
    When ele realizar uma pesquisa e incluir o produto "Blue Top" no Carrinho
    Then o produto "Blue Top" deve ser apresentado corretamente no Carrinho
