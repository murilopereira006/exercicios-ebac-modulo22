Cypress.Commands.add('login', (email, password) => {
    const fd = new FormData();
    fd.append('username', email)
    fd.append('password', password)
    fd.append('woocommerce-login-nonce', "4f4ce69f63")
    fd.append('r_wp_http_referer', "/minha-conta/")
    fd.append('login', 'Login')

    cy.request({
        url: 'http://lojaebac.ebaconline.art.br/minha-conta/',
        method: 'POST',
        body: fd
    })
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
})

Cypress.Commands.add('addItemInCart', (nameProduct, quantity, color, size) => {
    const fd = new FormData();
    fd.append('attribute_size', size)
    fd.append('attribute_color', color)
    fd.append('quantity', quantity)

    cy.request({
        url: `http://lojaebac.ebaconline.art.br/product/${nameProduct}/`,
        method: 'POST',
        body: fd
    }).then(function (response) { console.log(response) })

    cy.visit('http://lojaebac.ebaconline.art.br/carrinho/')
})
