describe('My Account > Edit Account Information & Edit Address', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ291dFN1Y2Nlc3Mv/')
    cy.get('#email').type('kelompok2@mail.com');
    cy.get('#pass').type('Kelompok2');
    cy.get('.login[name="send"]').click(); 
  })

  it('Positive Case: Edit Account Information Successfully', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
    cy.get('#firstname').clear().type('Kelompok')
    cy.get('#lastname').clear().type('Dua Sanber')
    cy.get('button[title="Save"]').click()
    cy.contains('You saved the account information.').should('be.visible')
  })

  it('Negative Case: change Account Information without First Name', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
    cy.get('#firstname').clear()
    cy.get('button[title="Save"]').click()
    cy.contains('This is a required field.').should('be.visible')
  })

  it('Negative Case: change Account Information without Last Name', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
    cy.get('#lastname').clear()
    cy.get('button[title="Save"]').click()
    cy.contains('This is a required field.').should('be.visible')
  })

  it('Positive Case: Change Email Successfully', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
    cy.get('#change-email').check()
    cy.get('#email').clear().type('kelompok2@mail.com')
    cy.get('#current-password').type('Kelompok2!')
    cy.get('button[title="Save"]').click()
   cy.contains('You saved the account information.').should('be.visible')
  })

  it('Negative Case: Change Email with Incorrect Password', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
    cy.get('#change-email').check()
    cy.get('#email').clear().type('kelompok2@mail.com')
    cy.get('#current-password').type('kelompokdua')
    cy.get('button[title="Save"]').click()
    cy.contains("The password doesn't match this account. Verify the password and try again.").should('be.visible')
    })

  it('Positive Case: Change Password Successfully', () => {
   cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
   cy.get('#change-password').check()
   cy.get('#current-password').type('Kelompok2!')
   cy.get('#password').type('Kelompok2')
   cy.get('#password-confirmation').type('Kelompok2')
   cy.get('button[title="Save"]').click()
   cy.contains('You saved the account information.').should('be.visible')
  })

 it('Negative Case: Change Password with Mismatched New Password and Confirmation', () => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
  cy.get('#change-password').check({ force: true }) 
  cy.get('#current-password').type('Kelompok2', { force: true }) 
  cy.get('#password').type('Kelompok@')
  cy.get('#password-confirmation').type('Kelompoksanber2')
  cy.get('button[title="Save"]').click()
  cy.get('#password-confirmation-error').should('contain', 'Please enter the same value again.') 
  })

it('Negative Case: Change Password Without Required Character Classes', () => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
  cy.get('#change-password').check()
  cy.get('#current-password').type('Kelompok2')
  cy.get('#password').type('kelompokduak')
  cy.get('#password-confirmation').type('kelompokduak')
  cy.get('button[title="Save"]').click()
  cy.contains('Minimum of different classes of characters in password is 3.').should('be.visible')
  })

 it('Positive Case: New Addictional Account Information Successfully', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/address/edit/')
    cy.get('#firstname').clear().type('kelompok')
    cy.get('#lastname').clear().type('sanber dua')
    cy.get('#company').clear().type('Sanber')
    cy.get('#telephone').clear().type('08123456789')
    cy.get('#street_1').clear().type('Jln Gotong Royong')
    cy.get('#city').clear().type('Jakarta Tenggara')
    cy.get('#zip').clear().type('12345')
    cy.get('#country').select('United States')
    cy.get('#region_id').select('New York')
    cy.get('button[title="Save Address"]').click()
    cy.contains('You saved the address.').should('be.visible')
  })

  it('Positive Case: Edit Account Information Checkbox Use as my default billing address Successfully', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/address/edit/')
    cy.get('#firstname').clear().type('kelompok')
    cy.get('#lastname').clear().type('sanber dua')
    cy.get('#company').clear().type('Sanber')
    cy.get('#telephone').clear().type('08123456789')
    cy.get('#street_1').clear().type('Jln Gotong Royong')
    cy.get('#city').clear().type('Jakarta Tenggara')
    cy.get('#zip').clear().type('12345')
    cy.get('#country').select('United States')
    cy.get('#region_id').select('New York')
    cy.get('#primary_billing').check()
    cy.get('button[title="Save Address"]').click()
    cy.contains('You saved the address.').should('be.visible')
  })

  it('Positive Case: Edit Account Information Checkbox Use as my default shipping address Successfully', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/address/edit/')
    cy.get('#firstname').clear().type('kelompok')
    cy.get('#lastname').clear().type('sanber dua')
    cy.get('#company').clear().type('Sanber')
    cy.get('#telephone').clear().type('08123456789')
    cy.get('#street_1').clear().type('Jln Gotong Royong')
    cy.get('#city').clear().type('Jakarta Tenggara')
    cy.get('#zip').clear().type('12345')
    cy.get('#country').select('United States')
    cy.get('#region_id').select('New York')
    cy.get('#primary_billing').check()
    cy.get('button[title="Save Address"]').click()
    cy.contains('You saved the address.').should('be.visible')
  })

  it('Negative Case: Edit Account Information Without Mandatory Fields', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/address/edit/')
    cy.get('#firstname').clear()
    cy.get('#lastname').clear()
    cy.get('#telephone').clear()
    cy.get('#street_1').clear()
    cy.get('#city').clear()
    cy.get('#zip').clear()
    cy.get('button[title="Save Address"]').click()
    cy.get('#firstname-error').should('be.visible').and('contain', 'This is a required field.')
    cy.get('#lastname-error').should('be.visible').and('contain', 'This is a required field.')
    cy.get('#telephone-error').should('be.visible').and('contain', 'This is a required field.')
    cy.get('#street_1-error').should('be.visible').and('contain', 'This is a required field.')
    cy.get('#city-error').should('be.visible').and('contain', 'This is a required field.')
    cy.get('#zip-error').should('be.visible').and('contain', 'This is a required field.')
  })

  it('Negative Case: Edit Account Without Selecting State/Province and Country', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/address/edit/')
    cy.get('#firstname').clear().type('kelompok')
    cy.get('#lastname').clear().type('sanber dua')
    cy.get('#company').clear().type('Sanber')
    cy.get('#telephone').clear().type('08123456789')
    cy.get('#street_1').clear().type('Jln Gotong Royong')
    cy.get('#city').clear().type('Jakarta Tenggara')
    cy.get('#zip').clear().type('12345')
    cy.get('#region_id').select('')
    cy.get('#country').select('')
    cy.get('button[title="Save Address"]').click()
    cy.get('#region_id-error').should('be.visible').and('contain', 'This is a required field.')
    cy.get('#country-error').should('be.visible').and('contain', 'This is a required field.')
  })

})