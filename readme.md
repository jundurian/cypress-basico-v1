# Cypress básico v1

Repo criado para armezenar o código dos estudos do [curso básico de Cypress](https://www.udemy.com/course/testes-automatizados-com-cypress-basico/) da [Escola Talking About Testing](https://talkingabouttesting.com/) no Udemy

A versão presente neste repo é a primeira versão do curso. A atualmente presente no curso é uma atualização.

Curso ministrado por [Walmyr Lima e Silva Filho](https://www.linkedin.com/in/walmyr-lima-e-silva-filho-147a9110a/)

## Conteúdo 

- Comandos Cypress
  - Get
  - Type
  - Select
  - (Un)Check
  - Should
  - As
  - Clear
- Comandos Customizados
- Fixtures

## Tools usadas
- [Cypress](https://www.cypress.io/) - 9.5.0
- [NodeJS](https://nodejs.org/en/) - 16.14.0
- JavaScript
- [Visual Studio Code](https://code.visualstudio.com/)

## Setup

Após instalar o NodeJS, faça o clone do repo.
Navegue para a pasta do projeto e execute o seguinte comando para instalar as dependências:

`npm install`

## Como rodar

- Modo interativo

Dentro do projeto:
`npx cypress open`

Selecione o navegador e clique no arquivo da Spec
![image](https://user-images.githubusercontent.com/66624772/167314435-1e7ad266-501f-41f6-bed1-36e17878024c.png)

- Modo headless (sem abrir o navegador)

Dentro do projeto:
`npx cypress run`

Ao final será mostrado o resultado da execução:

![image](https://user-images.githubusercontent.com/66624772/167314613-adc35913-0870-454e-958d-dfea10c1a4b0.png)





