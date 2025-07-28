Cypress.Commands.add('requisicaoGet', () => {
    cy.api({
        method: 'GET',
        url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a',
        qs: {
            id: '592f11060f95a3d3d46a987a',
        }
    })
})