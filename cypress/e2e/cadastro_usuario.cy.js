/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import commum_pages from '../support/pages/commum_pages'
import cadastro_page from '../support/pages/cadastro_usuario_page'


describe('Cadastro de usuario', () => {

    beforeEach('Acessar cadastro de usuário', () => {
        commum_pages.acessarCadastroUsuario()

    })

    it('Campo Nome vazio', () => {
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo nome deve ser prenchido')

    })
    it('Campo E-mail vazio', () => {
        cadastro_page.preencheNome(faker.name.fullName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')

    })
    it('Campo E-mail inválido', () => {
        cadastro_page.preencheNome(faker.name.fullName())
        cadastro_page.preencheEmail(faker.name.firstName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })
    it('Campo Senha vazio', () => {
        cadastro_page.preencheNome(faker.name.fullName())
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')

    })
    it('Campo Senha inválido', () => {
        cadastro_page.preencheNome(faker.name.fullName())
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.preencheSenha('1234')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')

    })
    it('Cadastro com sucesso', async () => {
        const name = await faker.name.fullName()

        cadastro_page.preencheNome(name)
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.preencheSenha('123456')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemSucesso(name)

    })
})