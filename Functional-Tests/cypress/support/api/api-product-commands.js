Cypress.Commands.add('listProduct', () => {
    cy.request({
        method: 'GET',
        url: '/produtos',
        failOnStatusCode: false,
    })
})

Cypress.Commands.add('idProduct', id => {
    cy.request({
        method: 'GET',
        url: `/produtos/${id}`,
        failOnStatusCode: false,
    })
})

Cypress.Commands.add('createProduct', (email, pass, prod, pric, descript, amoun) => {
    cy.getToken(email, pass).then(token => {
        cy.request({
            method: 'POST',
            url: '/produtos',
            headers: {
                'Content-Type': 'application/json',
                authorization: token,
            },
            failOnStatusCode: false,
            body: {
                nome: prod,
                preco: pric,
                descricao: descript,
                quantidade: amoun
            }
        })
    })

})

Cypress.Commands.add('updateProduct', (email, pass, id, prod, pric, descript, amoun) => {
    cy.getToken(email, pass).then(token => {
        cy.request({
            method: 'PUT',
            url: `/produtos/${id}`,
            headers: {
                'Content-Type': 'application/json',
                authorization: token,
            },
            failOnStatusCode: false,
            body: {
                nome: prod,
                preco: pric,
                descricao: descript,
                quantidade: amoun
            }
        })

    })
})

Cypress.Commands.add('deleteProduct', (email, pass, id) => {
    cy.getToken(email, pass).then(token => {
        cy.request({
            method: 'DELETE',
            url: `/produtos/${id}`,
            headers: {
                'Content-Type': 'application/json',
                authorization: token,
            },
            failOnStatusCode: false,
        })

    })
})