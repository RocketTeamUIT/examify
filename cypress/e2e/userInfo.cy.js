describe('User information form', () => {
  beforeEach(() => {
    cy.login('amaylin0@nature.com', 'tuannt02');

    // Direct user-info page
    cy.get('[data-testid=user-avatar]').click();
    cy.get('[data-testid=user-info-direct]').click();
  });

  it('Check empty "Họ và tên đệm" field', () => {
    // Fill in form and submit
    cy.get('[name=firstName]').clear({ force: true });
    cy.get('[data-testid=update-info-btn]').click({ force: true });

    // Declare assertion
    cy.get('[data-testid=firstname-error]').should('have.text', 'Vui lòng nhập trường này!');
  });

  it('Check empty "Tên" field', () => {
    // Fill in form and submit
    cy.get('[name=lastName]').clear({ force: true });
    cy.get('[data-testid=update-info-btn]').click({ force: true });

    // Declare assertion
    cy.get('[data-testid=lastname-error]').should('have.text', 'Vui lòng nhập trường này!');
  });

  it('Check the correct format of "Số điện thoại" field', () => {
    // Fill in form and submit
    cy.get('[name=phoneNumber]').clear({ force: true }).type('12312312311', { force: true });
    cy.get('[data-testid=update-info-btn]').click({ force: true });

    // Declare assertion
    cy.get('[data-testid=phone-error]').should('have.text', 'Số điện thoại không hợp lệ!');
  });

  it('Check empty all field', () => {
    // Fill in form and submit
    cy.get('[name=firstName]').clear({ force: true });
    cy.get('[name=lastName]').clear({ force: true });
    cy.get('[name=phoneNumber]').clear({ force: true });
    cy.get('[data-testid=update-info-btn]').click({ force: true });

    // Declare assertion
    cy.get('[data-testid=firstname-error]').should('have.text', 'Vui lòng nhập trường này!');
    cy.get('[data-testid=lastname-error]').should('have.text', 'Vui lòng nhập trường này!');
  });
});
