import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

let response;

When('eu faço uma requisição GET para o recurso com ID {string}', (id) => {
  cy.requisicaoGet(id).then((res) => {
    response = res;
  });
});

Then('o status da resposta deve ser {int}', (statusCode) => {
  expect(response.status).to.eq(statusCode);
});

Then('o campo name da lista deve ser {string}', (valorEsperado) => {
  expect(response.body.data.list.name).to.eq(valorEsperado);

  const name = response.body.data.list.name;
  
  cy.log(`Valor do campo name: ${name}`);
  console.log('Valor do campo name:', name);
});