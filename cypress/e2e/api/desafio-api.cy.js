describe('Desafio Api', () => {
    it('Deve realizar chamada com Metodo GET fornecendo o ID 592f11060f95a3d3d46a987a, validando response ', () => {
        cy.requisicaoGet()
            .then((response) => {
                expect(response.status).to.eq(200);

                const campoName = response.body.data.list.name
                cy.log('Campo Name:', campoName);

                expect(response.body.data).to.have.property('list');
                expect(response.body.data.list).to.have.property('name', 'Professional');
            });
    });

});
