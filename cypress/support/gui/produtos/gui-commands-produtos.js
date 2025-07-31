import { ProdutosPage } from '../../page_objects/ProdutosPage';

Cypress.Commands.add('telaProdutos', () => {
    cy.visit(ProdutosPage.urlProdutos);
    cy.get(ProdutosPage.tituloProdutos)
        .contains(ProdutosPage.textoProdutos);
});

Cypress.Commands.add('telaCarrinho', () => {
    cy.visit(ProdutosPage.urlCarrinho);
    cy.get(ProdutosPage.carrinhoAtivo)
        .contains(ProdutosPage.carrinhoTela);
});

Cypress.Commands.add('realizaPesquisa', (produto) => {
    cy.get(ProdutosPage.campoPesquisa)
        .type(produto);
    cy.get(ProdutosPage.botaoPesquisar)
        .click();
});

Cypress.Commands.add('verificaCarrinhoVazio', () => {
    cy.get(ProdutosPage.mensagemCarrinhoVazio)
        .contains('Cart is empty! Click here to buy products');
});

Cypress.Commands.add('btncontinuarComprando', () => {
    cy.get(ProdutosPage.botaoContinuarComprando)
        .click();
});

Cypress.Commands.add('btnExcluiItemDoCarrinho', () => {
    function excluirItens() {
        cy.get('body').then(($body) => {
            const botoesExcluir = $body.find(ProdutosPage.botaoExcluirCarrinho);
            if (botoesExcluir.length > 0) {
                cy.get(ProdutosPage.botaoExcluirCarrinho)
                    .first().click();
                cy.wait(500);
                excluirItens();
            } else {
                cy.log('Não existe mais produtos no Carrinho');
            }
        });
    }
    excluirItens();
});
