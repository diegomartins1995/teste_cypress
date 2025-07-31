Cypress.Commands.add('telaProdutos', () => {
    cy.visit('/products')
    cy.get('.title.text-center')
        .contains('All Products')
});

Cypress.Commands.add('telaDetalheProdutoBlueTop', () => {
    cy.visit('/product_details/1')
    cy.get('.product-information')
        .contains('Category: Women > Tops')
});

Cypress.Commands.add('telaCarrinho', () => {
    cy.visit('/view_cart')
    cy.get('.active')
        .contains('Shopping Cart')
});

Cypress.Commands.add('realizaPesquisa', (produto) => {
    cy.get('[id="search_product"]')
        .type(produto)
    cy.get('[id="submit_search"]')
        .click()
});

Cypress.Commands.add('verificaCarrinhoVazio', () => {
    cy.get('[id="empty_cart"]')
        .contains('Cart is empty! Click here to buy products')

});

Cypress.Commands.add('validaProdutoBlueTop', () => {
    cy.get('.productinfo p')
        .should('contain', 'Blue Top');
});

Cypress.Commands.add('btnAdicionaItemNoCarrinho', () => {
    cy.get('.btn.btn-default.cart')
        .click();
});

Cypress.Commands.add('btncontinuarComprando', () => {
    cy.get('[data-dismiss="modal"]')
        .click()
});

Cypress.Commands.add('validaCarrinho', (nomeProdutoCarrinho) => {
    cy.contains(nomeProdutoCarrinho)
        .should('be.visible')
});

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
});