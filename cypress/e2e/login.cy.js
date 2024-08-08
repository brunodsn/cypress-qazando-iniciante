/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import commum_pages from '../support/pages/commum_pages';
import login_pages from '../support/pages/login_pages';

describe('Testes de Login', () => {
  beforeEach('Acessando a pagina de login', () => {
   commum_pages.clicarLogin()

  })

  it('Deve exibir mensagem de erro para email inválido', () => {
    const emailInvalido = faker.internet.email()
    const senha = faker.internet.password()

    cy.get('#user')
    .type(emailInvalido)
    cy.get('#password')
    .type(senha)
    cy.get('#btnLogin')
    .click()
    
    
  })

  it('Deve exibir mensagem de erro para senha inválida', () => {
    const email = faker.internet.email()
    const senhaInvalida = faker.internet.password()

    cy.get('#user')
    .type(email);
    cy.get('#password')
    .type(senhaInvalida);
    cy.get('#btnLogin')
    .click()

  })

  it('Deve fazer login com sucesso', () => {
    const email= faker.name.fullName()
    const senhaValida = faker.internet.password()
    cy.get('#user')
    .type(email);
    cy.get('#password')
    .type(senhaValida);
    cy.get('#btnLogin')
    .click()


    

})
  })

