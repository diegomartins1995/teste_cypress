Feature: Validação de pesquisa de produtos e produtos no carrinho

  Background:
    Given que o usuário está logado com sucesso

  Scenario: Usuário realiza busca pelo Produto Blue Top
    Given que o usuário esteja na tela de produtos
    When ele realizar uma pesquisa pelo termo "Blue Top"
    And clicar no botão Pesquisar
    Then o sistema deve retornar somente o produto "Blue Top"

  Scenario: Usuário realiza busca pelo Produto Summer White Top
    Given que o usuário esteja na tela de produtos
    When ele realizar uma pesquisa pelo termo "Summer White Top"
    And clicar no botão Pesquisar
    Then o sistema deve retornar somente o produto "Summer White Top"

  Scenario: Usuário inclui produtos "Blue Top" e "Summer White Top" no carrinho
    Given que o usuário acesse a página inicial da Loja
    And verifica que o carrinho está vazio
    When ele adicionar os produtos "Blue Top" e "Summer White Top" no carrinho
    And acessar a página do carrinho
    Then os dois produtos adicionados devem ser apresentados corretamente
