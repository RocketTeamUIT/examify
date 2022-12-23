describe('User information form', () => {
  beforeEach(() => {
    cy.login('amaylin0@nature.com', 'tuannt02');

    // Direct user-info page
    cy.get('[data-testid=user-avatar]').click();
    cy.get('[data-testid=user-info-direct]').click();
  });

  it('test1', () => {
    // Fill in form and submit
    cy.get('[name=firstName]').type('', { force: true });
  });
});
