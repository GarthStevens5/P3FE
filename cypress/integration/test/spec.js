describe('Test Super Game Shelfs ', () => {
  it('Website name is Super Game Shelf', () => {
    cy.visit('http://localhost:3000/')
    cy.get('header').should('have.text', 'Super Game Shelf')
  })

  it('A game card is visible', () => {
    cy.get('ul').should('have', 'li')
  })
})