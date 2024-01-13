const faker = require('faker')

let name = null
let email = null
let password = null
let admin = null

let product = null
let price = null
let description = null
let amount = null

describe('Products Delete', () => {

    beforeEach(() => {
        name = faker.name.firstName()
        email = faker.internet.email(name)
        password = faker.internet.password()
        admin = 'true'

        product = faker.commerce.productName()
        price = faker.commerce.price()
        description = faker.commerce.productMaterial()
        amount = 2

        cy.apiCreateUuser(name, email, password, admin).then(user => {
            expect(user.status).to.eq(201)
        })
    })

    it('Request POST to successfully delete the product', () => {
        cy.createProduct(email, password, product, price, description, amount).then(prod => {
            expect(prod.status).to.eq(201)
            expect(prod.body.message).to.eq('Cadastro realizado com sucesso')
            const id = prod.body['_id']
            cy.deleteProduct(email, password, id).then(res => {
                expect(res.status).to.eq(200)
                expect(res.body.message).to.eq('Registro excluído com sucesso')
            })
        })
    })

    it('Request POST to delete non-existent product', () => {
        cy.createProduct(email, password, product, price, description, amount).then(prod => {
            expect(prod.status).to.eq(201)
            expect(prod.body.message).to.eq('Cadastro realizado com sucesso')
            cy.deleteProduct(email, password, '1234').then(res => {
                expect(res.status).to.eq(200)
                expect(res.body.message).to.eq('Nenhum registro excluído')
            })
        })
    })

})