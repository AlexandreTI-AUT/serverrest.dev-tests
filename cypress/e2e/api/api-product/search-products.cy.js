const faker = require('faker')

let name = null
let email = null
let password = null
let admin = null

let product = null
let price = null
let description = null
let amount = null

describe('Products Search', () => {

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

    it('Request GET to search for a list of products', () => {
        cy.listProduct().then(res => {
            expect(res.status).to.eq(200)
            expect(res.body.quantidade).not.be.null
            expect(res.body.produtos).not.be.null
        })
    })

    it('Request GET to query product by id', () => {
        cy.createProduct(email, password, product, price, description, amount).then(prod => {
            expect(prod.status).to.eq(201)
            expect(prod.body.message).to.eq('Cadastro realizado com sucesso')
            const id = prod.body['_id']
            cy.idProduct(id).then(res => {
                expect(res.status).to.eq(200)
                expect(res.body.nome).to.eq(product)
                expect(res.body.quantidade).to.eq(amount)
                expect(res.body._id).to.eq(id)
            })
        })
    })

    it('Request POST to query product by non-existent id', () => {
        cy.createProduct(email, password, product, price, description, amount).then(prod => {
            expect(prod.status).to.eq(201)
            expect(prod.body.message).to.eq('Cadastro realizado com sucesso')
            const id = 'apple'
            cy.idProduct(id).then(res => {
                expect(res.status).to.eq(400)
                expect(res.statusText).to.eq('Bad Request')
                expect(res.body.message).to.eq('Produto não encontrado')

            })
        })
    })

})