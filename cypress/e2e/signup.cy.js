describe('Signup', () => {
  it('Check empty all field', () => {
    // Visit page
    cy.visit('http://localhost:3000/signup');

    // Fill in form and submit
    cy.get('[data-testid=signup-button]').click({ force: true });

    // Declare assertion
    cy.get('[data-testid=email-error]').should('have.text', 'Email không được để trống.');
    cy.get('[data-testid=firstname-error]').should('have.text', 'Họ và tên đệm không được để trống');
    cy.get('[data-testid=lastname-error]').should('have.text', 'Tên không được để trống');
    cy.get('[data-testid=password-error]').should('have.text', 'Mật khẩu không được để trống.');
    cy.get('[data-testid=retype-password-error]').should('have.text', 'Vui lòng nhập trường này !');
  });

  it('Check empty email field', () => {
    // Visit page
    cy.visit('http://localhost:3000/signup');

    // Fill in form and submit
    cy.get('[name=firstname]').type('Nguyen', { force: true });
    cy.get('[name=lastname]').type('Tuan', { force: true });
    cy.get('[name=password]').type('Tuan2002@', { force: true });
    cy.get('[name=passwordConfirmation]').type('Tuan2002@', { force: true });
    cy.get('[data-testid=signup-button]').click();

    // Declare assertion
    cy.get('[data-testid=email-error]').should('have.text', 'Email không được để trống.');
    cy.get('[data-testid=firstname-error]').should('have.text', '');
    cy.get('[data-testid=lastname-error]').should('have.text', '');
    cy.get('[data-testid=password-error]').should('have.text', '');
    cy.get('[data-testid=retype-password-error]').should('have.text', '');
  });

  it('Check the correct format of email field', () => {
    // Visit page
    cy.visit('http://localhost:3000/signup');

    // Fill in form and submit
    cy.get('[name=email]').type('amaylin', { force: true });
    cy.get('[name=firstname]').type('Nguyen', { force: true });
    cy.get('[name=lastname]').type('Tuan', { force: true });
    cy.get('[name=password]').type('Tuan2002@', { force: true });
    cy.get('[name=passwordConfirmation]').type('Tuan2002@', { force: true });
    cy.get('[data-testid=signup-button]').click();

    // Declare assertion
    cy.get('[data-testid=email-error]').should('have.text', 'Email vừa nhập không đúng định dạng');
    cy.get('[data-testid=firstname-error]').should('have.text', '');
    cy.get('[data-testid=lastname-error]').should('have.text', '');
    cy.get('[data-testid=password-error]').should('have.text', '');
    cy.get('[data-testid=retype-password-error]').should('have.text', '');
  });

  it('Check empty "Họ và tên đệm" field', () => {
    // Visit page
    cy.visit('http://localhost:3000/signup');

    // Fill in form and submit
    cy.get('[name=email]').type('amaylin0@nature.com', { force: true });
    cy.get('[name=lastname]').type('Tuan', { force: true });
    cy.get('[name=password]').type('Tuan2002@', { force: true });
    cy.get('[name=passwordConfirmation]').type('Tuan2002@', { force: true });
    cy.get('[data-testid=signup-button]').click();

    // Declare assertion
    cy.get('[data-testid=email-error]').should('have.text', '');
    cy.get('[data-testid=firstname-error]').should('have.text', 'Họ và tên đệm không được để trống');
    cy.get('[data-testid=lastname-error]').should('have.text', '');
    cy.get('[data-testid=password-error]').should('have.text', '');
    cy.get('[data-testid=retype-password-error]').should('have.text', '');
  });

  it('Check input more than 50 characters', () => {
    // Visit page
    cy.visit('http://localhost:3000/signup');

    // Fill in form and submit
    cy.get('[name=email]').type('amaylin0@nature.com', { force: true });
    cy.get('[name=firstname]').type('thisisfirstnamethisisfirstnamethisisfirstnamethisisfirstnamethisisfirstname', {
      force: true,
    });
    cy.get('[name=lastname]').type('Tuan', { force: true });
    cy.get('[name=password]').type('Tuan2002@', { force: true });
    cy.get('[name=passwordConfirmation]').type('Tuan2002@', { force: true });
    cy.get('[data-testid=signup-button]').click();

    // Declare assertion
    cy.get('[data-testid=email-error]').should('have.text', '');
    cy.get('[data-testid=firstname-error]').should('have.text', 'Họ và tên không được quá 50 ký tự');
    cy.get('[data-testid=lastname-error]').should('have.text', '');
    cy.get('[data-testid=password-error]').should('have.text', '');
    cy.get('[data-testid=retype-password-error]').should('have.text', '');
  });

  it('Check empty "Tên" field', () => {
    // Visit page
    cy.visit('http://localhost:3000/signup');

    // Fill in form and submit
    cy.get('[name=email]').type('amaylin0@nature.com', { force: true });
    cy.get('[name=firstname]').type('Nguyen', { force: true });
    cy.get('[name=password]').type('Tuan2002@', { force: true });
    cy.get('[name=passwordConfirmation]').type('Tuan2002@', { force: true });
    cy.get('[data-testid=signup-button]').click();

    // Declare assertion
    cy.get('[data-testid=email-error]').should('have.text', '');
    cy.get('[data-testid=firstname-error]').should('have.text', '');
    cy.get('[data-testid=lastname-error]').should('have.text', 'Tên không được để trống');
    cy.get('[data-testid=password-error]').should('have.text', '');
    cy.get('[data-testid=retype-password-error]').should('have.text', '');
  });

  it('Check input more than 50 characters', () => {
    // Visit page
    cy.visit('http://localhost:3000/signup');

    // Fill in form and submit
    cy.get('[name=email]').type('amaylin0@nature.com', { force: true });
    cy.get('[name=firstname]').type('Nguyen', { force: true });
    cy.get('[name=lastname]').type('ThisislastnameThisislastnameThisislastnameThisislastnameThisislastname', {
      force: true,
    });
    cy.get('[name=password]').type('Tuan2002@', { force: true });
    cy.get('[name=passwordConfirmation]').type('Tuan2002@', { force: true });
    cy.get('[data-testid=signup-button]').click();

    // Declare assertion
    cy.get('[data-testid=email-error]').should('have.text', '');
    cy.get('[data-testid=firstname-error]').should('have.text', 'Tên không được quá 50 ký tự');
    cy.get('[data-testid=lastname-error]').should('have.text', '');
    cy.get('[data-testid=password-error]').should('have.text', '');
    cy.get('[data-testid=retype-password-error]').should('have.text', '');
  });

  it('Check empty "Mật khẩu" field', () => {
    // Visit page
    cy.visit('http://localhost:3000/signup');

    // Fill in form and submit
    cy.get('[name=email]').type('amaylin0@nature.com', { force: true });
    cy.get('[name=firstname]').type('Nguyen', { force: true });
    cy.get('[name=lastname]').type('Tuan', { force: true });
    cy.get('[name=passwordConfirmation]').type('Tuan2002@', { force: true });
    cy.get('[data-testid=signup-button]').click();

    // Declare assertion
    cy.get('[data-testid=email-error]').should('have.text', '');
    cy.get('[data-testid=firstname-error]').should('have.text', '');
    cy.get('[data-testid=lastname-error]').should('have.text', '');
    cy.get('[data-testid=password-error]').should('have.text', 'Mật khẩu không được để trống.');
    cy.get('[data-testid=retype-password-error]').should(
      'have.text',
      'Mật khẩu nhập lại phải trùng với mật khẩu vừa nhập',
    );
  });

  it('Check password match with special Regex', () => {
    // Visit page
    cy.visit('http://localhost:3000/signup');

    // Fill in form and submit
    cy.get('[name=email]').type('amaylin0@nature.com', { force: true });
    cy.get('[name=firstname]').type('Nguyen', { force: true });
    cy.get('[name=lastname]').type('Tuan', { force: true });
    cy.get('[name=password]').type('Tuan2002@', { force: true });
    cy.get('[name=passwordConfirmation]').type('Tuan2002@', { force: true });
    cy.get('[data-testid=signup-button]').click();

    // Declare assertion
    cy.get('[data-testid=email-error]').should('have.text', '');
    cy.get('[data-testid=firstname-error]').should('have.text', '');
    cy.get('[data-testid=lastname-error]').should('have.text', '');
    cy.get('[data-testid=password-error]').should('have.text', '');
    cy.get('[data-testid=retype-password-error]').should('have.text', '');
    cy.get('[name=password]')
      .invoke('val')
      .should('match', /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/);
  });

  it('Check empty "Nhập lại mật khẩu" field', () => {
    // Visit page
    cy.visit('http://localhost:3000/signup');

    // Fill in form and submit
    cy.get('[name=email]').type('amaylin0@nature.com', { force: true });
    cy.get('[name=firstname]').type('Nguyen', { force: true });
    cy.get('[name=lastname]').type('Tuan', { force: true });
    cy.get('[name=password]').type('Tuan2002@', { force: true });
    cy.get('[data-testid=signup-button]').click();

    // Declare assertion
    cy.get('[data-testid=email-error]').should('have.text', '');
    cy.get('[data-testid=firstname-error]').should('have.text', '');
    cy.get('[data-testid=lastname-error]').should('have.text', '');
    cy.get('[data-testid=password-error]').should('have.text', '');
    cy.get('[data-testid=retype-password-error]').should('have.text', 'Vui lòng nhập trường này !');
  });

  it('Check if the re-entered password is the same as the one you just entered', () => {
    // Visit page
    cy.visit('http://localhost:3000/signup');

    // Fill in form and submit
    cy.get('[name=email]').type('amaylin0@nature.com', { force: true });
    cy.get('[name=firstname]').type('Nguyen', { force: true });
    cy.get('[name=lastname]').type('Tuan', { force: true });
    cy.get('[name=password]').type('Tuan2002@', { force: true });
    cy.get('[name=passwordConfirmation]').type('Tuan2002', { force: true });
    cy.get('[data-testid=signup-button]').click();

    // Declare assertion
    cy.get('[data-testid=email-error]').should('have.text', '');
    cy.get('[data-testid=firstname-error]').should('have.text', '');
    cy.get('[data-testid=lastname-error]').should('have.text', '');
    cy.get('[data-testid=password-error]').should('have.text', '');
    cy.get('[data-testid=retype-password-error]').should(
      'have.text',
      'Mật khẩu nhập lại phải trùng với mật khẩu vừa nhập',
    );
  });
});
