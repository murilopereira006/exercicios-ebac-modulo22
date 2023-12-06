describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/')

    cy.get('.icon-user-unfollow').click()
  })
})