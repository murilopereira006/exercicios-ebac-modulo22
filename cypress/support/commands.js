Cypress.Commands.add('login', (email, password) => {

    const fd = new FormData();
    fd.append('log', email)
    fd.append('pwd', password)
    fd.append('wp-submit', "Acessar")
    fd.append('redirect_to', "/wp-user")
    fd.append('cookie', 1)

    cy.request({
        url: 'https://',
        method: 'POST',
        body: {}
    })
})
