/// <reference types="cypress" />

export default {
    acessarCadastroUsuario() {
        cy.visit('/')
            .get('#top_header')

            cy.get('.fa-lock')
            .click()
    },
    clicarLogin() {
        cy.visit('/')
        .get('#top_header')
        
        cy.get('.right_list_fix > :nth-child(1) > a')
            .click()

}
}