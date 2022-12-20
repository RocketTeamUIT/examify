describe('Login', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/signin');

    const email = cy.get('[name=email]').click();
    email.type('amaylin');

    const password = cy.get('[name=password]').click();
    password.type('tuannt02');

    const submit = cy.get('[data-testid=login-button]').click();
    const errorEmail = cy.get('[data-testid=email-error]');

    submit.click();
  });
});
