Cypress.Commands.add('apiCreateUuser', (name, email, password, admin) => {
    cy.request({
        method: 'POST',
        url: '/usuarios',
        failOnStatusCode: false,
        body: {
            nome: name,
            email: email,
            password: password,
            administrador: admin
        },
    })
})

Cypress.Commands.add('apiLitUser', () => {
    cy.request({
        method: 'GET',
        url: '/usuarios',
        failOnStatusCode: false,
    })
})

Cypress.Commands.add('getUserId', id => {
    cy.request({
        method: 'GET',
        url: `/usuarios/${id}`,
        failOnStatusCode: false,
    })
})

Cypress.Commands.add('apiUpdateUser', (id, name, email, password, admin) => {
    cy.request({
        method: 'PUT',
        url: `/usuarios/${id}`,
        failOnStatusCode: false,
        body: {
            nome: name,
            email: email,
            password: password,
            administrador: admin
        },
    })
})

Cypress.Commands.add('deleteUser', id => {
    cy.request({
        method: 'DELETE',
        url: `/usuarios/${id}`,
        failOnStatusCode: false,
    })
})