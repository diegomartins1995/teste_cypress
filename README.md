# Projeto de Automação de Testes com Cypress e Cucumber

Este repositório contém um conjunto de testes automatizados de ponta-a-ponta (E2E) para o site [Automation Exercise](https://www.automationexercise.com). O objetivo do projeto é validar as principais funcionalidades do e-commerce, como busca de produtos, adição ao carrinho e fluxos de login, utilizando uma abordagem de BDD (Behavior-Driven Development).

---

## Tecnologias Utilizadas

* **[Cypress](https://www.cypress.io/):** Framework principal para a automação dos testes E2E.
* **[Cucumber](https://cucumber.io/):** Ferramenta para escrita de testes em Gherkin (`.feature`), permitindo uma abordagem BDD.
* **[cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor):** A biblioteca que faz a ponte entre o Cypress e os arquivos Cucumber.
* **[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript):** Linguagem de programação para a implementação dos passos de teste.
* **[Node.js](https://nodejs.org/):** Ambiente de execução para o projeto.
* **[Mochawesome Reporter](https://github.com/antontelesh/cypress-mochawesome-reporter):** Biblioteca para a geração de relatórios de teste em HTML, ricos e interativos.

---

## Pré-requisitos

Antes de começar, certifique-se de que você tem as seguintes ferramentas instaladas em seu sistema:

* **Node.js:** Versão 18.x ou superior (LTS recomendada).
    * *Você pode baixar em: [nodejs.org](https://nodejs.org/)*
    * *Para verificar sua versão, execute no terminal:* `node -v`
* **NPM (Node Package Manager):** Geralmente já vem instalado com o Node.js.
    * *Para verificar sua versão:* `npm -v`
* **Git:** Para clonar o repositório.
    * *Você pode baixar em: [git-scm.com](https://git-scm.com/)*

---

## Instalação e Configuração

Siga os passos abaixo para configurar o ambiente e instalar todas as dependências do projeto.

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO_GIT>
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd nome-da-pasta-do-projeto
    ```

3.  **Instale as dependências:**
    Este comando irá baixar todas as bibliotecas listadas no arquivo `package.json`, incluindo o Cypress.
    ```bash
    npm install
    ```

Após a conclusão, seu ambiente estará pronto para executar os testes.

---

## ⚡ Executando os Testes

Você pode executar os testes do Cypress de duas formas principais:

### 1. Modo Interativo (com Interface Gráfica)

Este modo abre o Test Runner do Cypress, permitindo que você veja os testes sendo executados em tempo real, depure o código e interaja com os elementos. É ideal para desenvolver e depurar os testes.

```bash
npx cypress open
2. Modo Headless (Via Linha de Comando)
Este modo executa todos os testes em segundo plano, sem abrir a interface gráfica do navegador. É o modo utilizado em ambientes de Integração Contínua (CI/CD) para validações automáticas. Ao final, os vídeos e relatórios são gerados.

Bash

npx cypress run
Relatórios (Reports)
Após a execução dos testes no modo headless (npx cypress run), um relatório HTML interativo é gerado.

Localização: Você pode encontrar os relatórios na pasta cypress/reports/.

Como visualizar: Abra o arquivo .html gerado dentro dessa pasta em qualquer navegador para ver os resultados detalhados, incluindo screenshots das falhas.

Estrutura de Pastas
Uma visão geral das pastas mais importantes do projeto:

/
├── cypress/
│   ├── e2e/
│   │   └── gui/
│   │       └── features/       # Contém os arquivos de funcionalidades (.feature)
│   ├── fixtures/               # Massa de dados estática em formato .json
│   └── support/
│       ├── e2e.js              # Arquivo de configuração que importa os comandos
│       ├── gui/                # Comandos customizados, organizados por funcionalidade
│       │   ├── login/
│       │   └── produtos/
│       └── step_definitions/   # Contém os arquivos de implementação dos passos (.js)
└── package.json                # Lista de dependências e scripts do projeto






