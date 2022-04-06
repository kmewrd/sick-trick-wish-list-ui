describe('Homepage', () => {
  it('Should contain a heading with the title of the site', () => {
    cy.visit('http://localhost:3000')
      .get('h1')
      .contains('Sick Trick Wish List')
  })

  it('Should contain a form that allows users to submit a new trick. The form should contain four fields: stance, name of trick, obstacle, and a link.', () => {
    cy.visit('http://localhost:3000')
      .get('form select[name="stance"]')
      .should('contain', 'Choose your Stance')
      .and('contain', 'Regular')
      .and('contain', 'Switch')
  })
});