class SignupPage {
    visit() {
      cy.visit("/customer/account/create/");
    }
  
    fillSignupForm(firstName, lastName, email, password, confirmPassword) {
      cy.get("#firstname").type(firstName);
      cy.get("#lastname").type(lastName);
      cy.get("#email_address").type(email);
      cy.get("#password").type(password);
      cy.get("#password-confirmation").type(confirmPassword);
    }
  
    submit() {
      cy.get("button[title='Create an Account']").click();
    }
  
    verifyErrorMessage(selector, message) {
      cy.get(selector).should("contain", message);
    }
  }
  
  export default new SignupPage();
  