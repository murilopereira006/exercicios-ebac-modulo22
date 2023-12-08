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

Cypress.Commands.add('addItemInCart', (productId, color, size, quantity) => {
    cy.intercept('POST', '/users*', {
        statusCode: 201,
        body: {
            product_id: productId,
            attribute_size: size,
            attribute_color: color,
            quantity: quantity
        },
    })

    cy.visit('http://lojaebac.ebaconline.art.br/carrinho/')
})
