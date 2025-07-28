describe('Validação de pesquisa de produtos e Produtos no carrinho ', () => {
    beforeEach(() => {
        cy.loginUsuario()
        cy.validaMsgLoginOk()
    })

    after(() => {
        cy.telaCarrinho()
        cy.btnExcluiItemDoCarrinho()
        cy.verificaCarrinhoVazio()
    })

    /* 04- Scenario: Usuário realiza busca pelo Produto Blue Top
     Given que o usuário esteja na tela de produtos
     When ele realizar uma pesquisa pelo termo Blue Top
     And clicar no botão Pesquisar(lupa)
     Then o sistema deve retornar somente o produto correto
   */

    it('04 - Deve Pesquisar pelo produto Blue top', () => {
        cy.telaProdutos()
        cy.realizaPesquisa('Blue Top')
        cy.validaProdutoBlueTop()
    })

    /* 05- Scenario: Usuário realiza busca pelo Produto Summer White Top
     Given que o usuário esteja na tela de produtos
     When ele realizar uma pesquisa pelo termo "Summer White Top"
     And clicar no botão Pesquisar(lupa)
     Then o sistema deve retornar somente o produto correto
   */
    it('05 - Deve Pesquisar pelo produto Summer White Top', () => {
        cy.telaProdutos()
        cy.realizaPesquisa('Summer White Top')
        cy.validaProdutoSummerWhiteTop()
    })

    /* 06- Scenario: Usuário inclui produtos "Blue Top" e "Summer White Top" no carrinho
     Given que o usuário acesse a página inicial da Loja
     And verifica que o carrinho está vazio
     When ele adicionar os produtos "Blue Top" e "Summer White Top" no carrinho
     And acessar a página do carrinho
     Then os dois produtos adicionados devem ser apresentados corretamente 
   */
    it('06 - Deve adicionar dois produtos ao carrinho e validar se estão presentes', () => {
        cy.telaCarrinho()
        cy.verificaCarrinhoVazio()
        cy.telaProdutos()
        cy.realizaPesquisa('Blue Top')
        cy.validaProdutoBlueTop()
        cy.btnVerDetalhesProdutoBlueTop()
        cy.btnAdicionarAoCarrinho()
        cy.btncontinuarComprando()
        cy.telaProdutos()
        cy.realizaPesquisa('Summer White Top')
        cy.validaProdutoSummerWhiteTop()
        cy.btnVerDetalhesProdutoSummerWhiteTop()
        cy.btnAdicionarAoCarrinho()
        cy.btncontinuarComprando()
        cy.telaCarrinho()
        cy.validaProdutoBlueTopNoCarrinho()
        cy.validaProdutoSummerWhiteTopNoCarrinho()
    })
})