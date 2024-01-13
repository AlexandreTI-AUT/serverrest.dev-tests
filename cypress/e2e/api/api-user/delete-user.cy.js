const faker = require('faker')

let name = null
let email = null
let password = null
let admin = null

describe('User Delete', () => {

    it('Request DELETE to delete the user', () => {
        name = faker.name.firstName()
        email = faker.internet.email(name)
        password = faker.internet.password()
        admin = 'true'

        cy.apiCreateUuser(name, email, password, admin).then(user => {
            expect(user.status).to.eq(201)
            expect(user.body._id).not.be.null
            const id = user.body['_id']
            cy.deleteUser(id).then(res => {
                expect(res.status).to.eq(200)
                expect(res.body.message).to.eq('Registro excluído com sucesso')
            })
        })
    })

    it('Request DELETE for a non-existent id', () => {
        cy.deleteUser('123').then(res => {
            expect(res.status).to.eq(200)
            expect(res.body.message).to.eq('Nenhum registro excluído')
        })
    })

})