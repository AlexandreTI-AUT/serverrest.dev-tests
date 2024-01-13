const faker = require('faker')

let name = null
let email = null
let password = null
let admin = null

describe('User Create', () => {

  beforeEach(() => {
    name = faker.name.firstName()
    email = faker.internet.email(name)
    password = faker.internet.password()
    admin = 'true'
  })

  it('Request POST to create a user', () => {
    cy.apiCreateUuser(name, email, password, admin).then(res => {
      expect(res.status).to.eq(201)
      expect(res.statusText).to.eq('Created')
      expect(res.body.message).to.eq('Cadastro realizado com sucesso')
    })
  })

  it('Request POST informing existing email', () => {
    cy.apiCreateUuser(name, (email = 'beltrano@qa.com.br'), password, admin).then(res => {
      expect(res.status).to.eq(400)
      expect(res.statusText).to.eq('Bad Request')
      expect(res.body.message).to.eq('Este email já está sendo usado')
    })
  })



  it('Request POST with a blank name field', () => {
    cy.apiCreateUuser((name = ""), email, password, admin).then(res => {
      expect(res.status).to.eq(400)
      expect(res.statusText).to.eq('Bad Request')
      expect(res.body.nome).to.eq('nome não pode ficar em branco')
    })
  })

  it('Request with an invalid email address', () => {
    cy.apiCreateUuser(name, (email = 'teste@'), password, admin).then(res => {
      expect(res.status).to.eq(400)
      expect(res.statusText).to.eq('Bad Request')
      expect(res.body.email).to.eq('email deve ser um email válido')
    })
  })

  it('Request POST stating the password as null', () => {
    cy.apiCreateUuser(name, email, (password = null), admin).then(res => {
      expect(res.status).to.eq(400)
      expect(res.statusText).to.eq('Bad Request')
      expect(res.body.password).to.eq('password deve ser uma string')
    })
  })

})
