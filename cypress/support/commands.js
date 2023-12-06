Cypress.Commands.add('login', (email, password) => {

    const fd = new FormData();
    fd.append('log', email)
    fd.append('pwd', password)
    fd.append('wp-submit', "Acessar")
    fd.append('redirect_to', "http://lojaebac.ebaconline.art.br/minha-conta/")
    fd.append('cookie', 1)

    cy.request({
        url: 'http://lojaebac.ebaconline.art.br/minha-conta/',
        method: 'POST',
        body: fd
    }).then(response => {
        console.log(response);
        response.headers['set-cookie'].forEach(cookie => {
            const firstPart = cookie.split(';')[0]
            const divisor = firstPart.indexOf('=')
            const key = firstPart.substr(0, divisor)
            const value = firstPart.substr(divisor + 1)

            cy.setcookie(key, value)
        });
    })

    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
})
