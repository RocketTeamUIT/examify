describe('Signin', () => {
  it('Check empty email field', () => {
    // Visit page
    cy.visit('http://localhost:3000/signin');

    // Fill in form and submit
    cy.get('[name=password]').type('tuannt02', { force: true });
    cy.get('[data-testid=login-button]').click();

    // Declare assertion
    cy.get('[data-testid=email-error]').should('have.text', 'Email không được để trống.');
    cy.get('[data-testid=password-error]').should('have.text', '');
  });

  it('Check empty email field', () => {
    // Visit page
    cy.visit('http://localhost:3000/signin');

    // Fill in form and submit
    cy.get('[name=email]').type('amaylin0@nature.com');
    cy.get('[data-testid=login-button]').click();

    // Declare assertion
    cy.get('[data-testid=email-error]').should('have.text', '');
    cy.get('[data-testid=password-error]').should('have.text', 'Mật khẩu không được để trống.');
  });

  it('Check empty email, password field', () => {
    // Visit page
    cy.visit('http://localhost:3000/signin');

    // Fill in form and submit
    cy.get('[data-testid=login-button]').click();

    // Declare assertion
    cy.get('[data-testid=email-error]').should('have.text', 'Email không được để trống.');
    cy.get('[data-testid=password-error]').should('have.text', 'Mật khẩu không được để trống.');
  });

  it('Check the correct format of email field', () => {
    // Visit page
    cy.visit('http://localhost:3000/signin');

    // Fill in form and submit
    cy.get('[name=email]').type('amaylin', { force: true });
    cy.get('[name=password]').type('tuannt02', { force: true });
    cy.get('[data-testid=login-button]').click();

    // Declare assertion
    cy.get('[data-testid=email-error]').should('have.text', 'Email không đúng định dạng');
    cy.get('[data-testid=password-error]').should('have.text', '');
  });

  it('Check all fields are entered correctly', () => {
    // Visit page
    cy.visit('http://localhost:3000/signin');

    // Fill in form and submit
    cy.get('[name=email]').type('amaylin0@nature.com', { force: true });
    cy.get('[name=password]').type('tuannt02', { force: true });
    cy.get('[data-testid=login-button]').click();

    // Declare assertion
    cy.get('[data-testid=email-error]').should('have.text', '');
    cy.get('[data-testid=password-error]').should('have.text', '');
  });
});
