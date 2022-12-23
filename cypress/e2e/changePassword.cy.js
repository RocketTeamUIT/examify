describe('Change password form', () => {
  beforeEach(() => {
    cy.login('amaylin0@nature.com', 'tuannt02');

    // Direct user-info page
    cy.get('[data-testid=user-avatar]').click();
    cy.get('[data-testid=user-info-direct]').click();
    cy.contains('Đổi mật khẩu').click({ force: true });
  });

  it('Check empty all field', () => {
    // Fill in form and submit
    cy.contains('Đặt lại mật khẩu').click({ force: true });

    // Declare assertions
    cy.get('[name=old-password-error]').should('have.text', 'Vui lòng nhập trường này!');
    cy.get('[name=new-password-error]').should('have.text', 'Vui lòng nhập trường này!');
    cy.get('[name=retype-password-error]').should('have.text', 'Vui lòng nhập trường này!');
  });

  it('Check empty "Mật khẩu cũ" field', () => {
    // Fill in form and submit
    cy.get('[name=newPassword]').type('Tuan2002@@');
    cy.get('[name=confirmPassword]').type('Tuan2002@@');
    cy.contains('Đặt lại mật khẩu').click({ force: true });

    // Declare assertions
    cy.get('[name=old-password-error]').should('have.text', 'Vui lòng nhập trường này!');
    cy.get('[name=new-password-error]').should('have.text', '');
    cy.get('[name=retype-password-error]').should('have.text', '');
  });

  it('Check empty "Mật khẩu mới" field', () => {
    // Fill in form and submit
    cy.get('[name=oldPassword]').type('Tuan2002@');
    cy.get('[name=confirmPassword]').type('Tuan2002@@');
    cy.contains('Đặt lại mật khẩu').click({ force: true });

    // Declare assertions
    cy.get('[name=old-password-error]').should('have.text', '');
    cy.get('[name=new-password-error]').should('have.text', 'Vui lòng nhập trường này!');
    cy.get('[name=retype-password-error]').should('have.text', 'Mật khẩu nhập lại phải trùng với mật khẩu vừa nhập');
  });

  it('Check "Mật khẩu mới" match with special Regex', () => {
    // Fill in form and submit
    cy.get('[name=oldPassword]').type('Tuan2002@');
    cy.get('[name=newPassword]').type('Tuan2002@@');
    cy.get('[name=confirmPassword]').type('Tuan2002@@');
    cy.contains('Đặt lại mật khẩu').click({ force: true });

    // Declare assertions
    cy.get('[name=old-password-error]').should('have.text', '');
    cy.get('[name=new-password-error]').should('have.text', 'Vui lòng nhập trường này!');
    cy.get('[name=retype-password-error]').should('have.text', 'Mật khẩu nhập lại phải trùng với mật khẩu vừa nhập');
    cy.get('[name=new-password-error]')
      .invoke('val')
      .should('match', /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/);
  });

  it('Check empty "Nhập lại mật khẩu" field', () => {
    // Fill in form and submit
    cy.get('[name=oldPassword]').type('Tuan2002@');
    cy.get('[name=newPassword]').type('Tuan2002@@');
    cy.contains('Đặt lại mật khẩu').click({ force: true });

    // Declare assertions
    cy.get('[name=old-password-error]').should('have.text', '');
    cy.get('[name=new-password-error]').should('have.text', '');
    cy.get('[name=retype-password-error]').should('have.text', 'Vui lòng nhập trường này!');
  });

  it('Check if the re-entered password is the same as the one you just entered', () => {
    // Fill in form and submit
    cy.get('[name=oldPassword]').type('Tuan2002@');
    cy.get('[name=newPassword]').type('Tuan2002@@');
    cy.get('[name=confirmPassword]').type('Tuan2002@@@');
    cy.contains('Đặt lại mật khẩu').click({ force: true });

    // Declare assertions
    cy.get('[name=old-password-error]').should('have.text', '');
    cy.get('[name=new-password-error]').should('have.text', '');
    cy.get('[name=retype-password-error]').should('have.text', 'Mật khẩu nhập lại phải trùng với mật khẩu vừa nhập');
  });

  it('Check all fields are entered correctly', () => {
    // Fill in form and submit
    cy.get('[name=oldPassword]').type('Tuan2002@');
    cy.get('[name=newPassword]').type('Tuan2002@@');
    cy.get('[name=confirmPassword]').type('Tuan2002@@');
    cy.contains('Đặt lại mật khẩu').click({ force: true });

    // Declare assertions
    cy.get('[name=old-password-error]').should('have.text', '');
    cy.get('[name=new-password-error]').should('have.text', '');
    cy.get('[name=retype-password-error]').should('have.text', '');
  });
});
