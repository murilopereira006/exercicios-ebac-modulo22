describe('exercicio 2', () => {
  it('fluxo de checkout', () => {
    cy.login('Jasen_Donnelly3@hotmail.com', 'text123')

    cy.addItemInCart('abominable-hoodie', 2, 'Red', 'M')
  })
})