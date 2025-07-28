Cypress.Commands.add('telaProdutos', () => {
    cy.visit('/products')
    cy.get('[class="title text-center"]')
        .contains('All Products')
})

Cypress.Commands.add('telaCarrinho', () => {
    cy.visit('/view_cart')
    cy.get('[class="active"]')
        .contains('Shopping Cart')
})

Cypress.Commands.add('realizaPesquisa', (
    produto = '') => {
    cy.get('[id="search_product"]')
        .type(produto)
    cy.get('[id="submit_search"]')
        .click()
})

Cypress.Commands.add('validaProdutoBlueTop', () => {
    cy.get('[class="title text-center"]')
        .contains('Searched Products')
    cy.get('[class="single-products"]')
        .contains('Blue Top')
})

Cypress.Commands.add('validaProdutoSummerWhiteTop', () => {
    cy.get('[class="title text-center"]')
        .contains('Searched Products')
    cy.get('[class="single-products"]')
        .contains('Summer White Top')
})

Cypress.Commands.add('verificaCarrinhoVazio', () => {
    cy.get('[id="empty_cart"]')
        .contains('Cart is empty! Click here to buy products')

})

Cypress.Commands.add('btnVerDetalhesProdutoBlueTop', () => {
    cy.get('[href="/product_details/1"]')
        .click()
})

Cypress.Commands.add('btnVerDetalhesProdutoSummerWhiteTop', () => {
    cy.get('[href="/product_details/6"]')
        .click()
})


Cypress.Commands.add('btnAdicionarAoCarrinho', () => {
    cy.get('[class="btn btn-default cart"]')
        .click()
})

Cypress.Commands.add('btncontinuarComprando', () => {
    cy.get('[data-dismiss="modal"]')
        .click()

})

Cypress.Commands.add('validaProdutoBlueTopNoCarrinho', () => {
    cy.get('[id="product-1"]')
        .contains('Blue Top')
})

Cypress.Commands.add('validaProdutoSummerWhiteTopNoCarrinho', () => {
    cy.get('[id="product-6"]')
        .contains('Summer White Top')
})

Cypress.Commands.add('btnExcluiItemDoCarrinho', () => {
    function excluirItens() {
        cy.get('body').then(($body) => {
            const botoesExcluir = $body.find('.cart_quantity_delete');

            if (botoesExcluir.length > 0) {
                cy.get('.cart_quantity_delete')
                .first()
                .click();
                cy.wait(500); 
                excluirItens();
            } else {
                cy.log('Não existe mais produtos no Carrinho');
            }
        });
    }
    excluirItens();
})