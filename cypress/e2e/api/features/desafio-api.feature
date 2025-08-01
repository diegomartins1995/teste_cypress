Feature: Validação de resposta de API com ID específico

  Scenario: Requisição GET com ID fixo e validação da resposta
    When eu faço uma requisição GET para o recurso com ID "592f11060f95a3d3d46a987a"
    Then o status da resposta deve ser 200
    And o campo name da lista deve ser "Professional"

