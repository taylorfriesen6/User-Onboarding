describe('Form', () => {
  it('receives input in name field', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input[name=name]').type('qqq');
  })
})