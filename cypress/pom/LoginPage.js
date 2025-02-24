class LoginPage {
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
    }
  
    login(email, password) {
      cy.get('#email').type(email);
      cy.get('#pass').type(password);
      cy.get('.login[name="send"]').click();
    }
  }
  
  export default new LoginPage();