/// <reference types="cypress" />

export default  {
   clicarLogin () {
    cy.visit('/');
    cy.get('.right_list_fix > :nth-child(1) > a')

    },

    clicarEmail(email) {
          cy.get('#email')
          .type(email);

        },
        validarMensagemErro(mensagem) {
            cy.get('.errorLabel')
                .should('be.visible')
                .should('have.text', mensagem)
          },
  
    fillPassword(password) {
      cy.get('#password')
      .type(password);
    },

  
    mensagemLoginSucesso(login) {
      cy.get('#btnLogin')
      .type(login)
    },
  
  }
  
 
  