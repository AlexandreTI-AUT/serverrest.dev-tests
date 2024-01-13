const faker = require('faker')

let name = null
let email = null
let password = null
let admin = null

describe('Login', () => {

    it('Request POST to login successfully', () => {
        name = faker.name.firstName()
        email = faker.internet.email(name)
        password = faker.internet.password()
        admin = 'true'

        cy.apiCreateUuser(name, email, password, admin).then(user => {
            expect(user.status).to.eq(201)
            expect(user.body.message).to.eq('Cadastro realizado com sucesso')
            cy.apiLogin(email, password).then(res => {
                expect(res.status).to.eq(200)
                expect(res.body.message).to.eq('Login realizado com sucesso')
                expect(res.body.authorization).not.be.null
            })
        })
    })

    it('Request POST with an unregistered login', () => {
        cy.apiLogin((email = 'hello@cypress.io'), (password = '123456')).then(res => {
            expect(res.status).to.eq(401)
            expect(res.body.message).to.eq('Email e/ou senha inválidos')
        })
    })

})