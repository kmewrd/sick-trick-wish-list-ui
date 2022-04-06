describe('Homepage', () => {
  it('Should contain a heading with the title of the site', () => {
    cy.visit('http://localhost:3000')
      .get('h1')
      .contains('Sick Trick Wish List')
  })

  it('Should contain a form for users to submit a new trick. The form should contain four fields: stance, name of trick, obstacle, and a link.', () => {
    cy.visit('http://localhost:3000')
      .get('form select[name="stance"]')
      .should('contain', 'Choose your Stance')
      .and('contain', 'Regular')
      .and('contain', 'Switch')

    cy.visit('http://localhost:3000')
      .get('form select[name="obstacle"]')
      .should('contain', 'Choose your Obstacle')
      .and('contain', 'Pool')
      .and('contain', 'Rail')
      .and('contain', 'Stairs')
      .and('contain', 'Flat Ground')
      .and('contain', 'Ledge')

    cy.visit('http://localhost:3000')
      .get('form input[name="name"]')
      .should('have.attr', 'placeholder', 'Name of Trick')
      .and('have.attr', 'type', 'text')

    cy.visit('http://localhost:3000')
      .get('form input[name="tutorial"]')
      .should('have.attr', 'placeholder', 'Link to Tutorial')
      .and('have.attr', 'type', 'text')
  })

  it('Should submit the trick on button click and have it immediately display on the DOM.', () => {
    cy.visit('http://localhost:3000')
      .get('select[name="stance"]')
      .select('Regular')
      .get('input[name="name"]')
      .type('Treflip')
      .get('select[name="obstacle"]')
      .select('Pool')
      .get('input[name="tutorial"]')
      .type('https://www.youtube.com/watch?v=n_lgPml1ZoM')
      .get('button')
      .click()
      .get('.tricks-container')
      .should('contain', 'Regular Treflip')
      .and('contain', 'Obstacle: Pool')
      .and('contain', 'https://www.youtube.com/watch?v=n_lgPml1ZoM')
  })
});