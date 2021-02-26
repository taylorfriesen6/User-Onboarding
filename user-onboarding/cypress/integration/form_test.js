describe('Form', () => {
  it('receives input in name field', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input[name=name]').type('Taylor')
      .should('have.value', 'Taylor');
  })
  it('receives input in email field', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input[name=email]').type('taylorfriesen@protonmail.com')
      .should('have.value', 'taylorfriesen@protonmail.com');
  })
  it('receives input in password field', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input[name=password]').type('swordfish')
      .should('have.value', 'swordfish');
  })

})