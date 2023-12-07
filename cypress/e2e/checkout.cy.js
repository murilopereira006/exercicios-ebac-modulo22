describe('exercicio 2', () => {
  it('fluxo de checkout', () => {
    cy.login('Jasen_Donnelly3@hotmail.com', 'text123')

    cy.visit('http://lojaebac.ebaconline.art.br/product/abominable-hoodie/')
    cy.get('.button-variable-item-L').click()
    cy.get('.button-variable-item-Green').click()
    cy.get('.single_add_to_cart_button').click()


    cy.visit('http://lojaebac.ebaconline.art.br/carrinho/')
    cy.get('.checkout-button').click()
    cy.get('#payment_method_cod').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()

    cy.contains('Obrigado. Seu pedido foi recebido.').should('be.visible')
  })
})