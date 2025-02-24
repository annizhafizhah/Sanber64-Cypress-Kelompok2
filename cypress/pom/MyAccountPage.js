class MyAccountPage {
    visitLoginPage() {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
    }
  
    login(email, password) {
      cy.get('#email').type(email);
      cy.get('#pass').type(password);
      cy.get('.login[name="send"]').click();
    }
  
    visitEditAccount() {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/');
    }
  
    editAccountInfo(firstName, lastName) {
      cy.get('#firstname').clear().type(firstName);
      cy.get('#lastname').clear().type(lastName);
      cy.get('button[title="Save"]').click();
    }
  
    checkSuccessMessage(message) {
      cy.contains(message).should('be.visible');
    }
  
    editEmail(newEmail, currentPassword) {
      cy.get('#change-email').check();
      cy.get('#email').clear().type(newEmail);
      cy.get('#current-password').type(currentPassword);
      cy.get('button[title="Save"]').click();
    }
  
    editPassword(currentPassword, newPassword, confirmPassword) {
      cy.get('#change-password').check();
      cy.get('#current-password').type(currentPassword);
      cy.get('#password').type(newPassword);
      cy.get('#password-confirmation').type(confirmPassword);
      cy.get('button[title="Save"]').click();
    }
  
    visitEditAddress() {
      cy.visit('https://magento.softwaretestingboard.com/customer/address/edit/');
    }
  
    editAddress(data) {
      cy.get('#firstname').clear().type(data.firstName);
      cy.get('#lastname').clear().type(data.lastName);
      cy.get('#company').clear().type(data.company);
      cy.get('#telephone').clear().type(data.telephone);
      cy.get('#street_1').clear().type(data.street);
      cy.get('#city').clear().type(data.city);
      cy.get('#zip').clear().type(data.zip);
      cy.get('#country').select(data.country);
      cy.get('#region_id').select(data.region);
      cy.get('button[title="Save Address"]').click();
    }
  }
  
  export default new MyAccountPage();
  