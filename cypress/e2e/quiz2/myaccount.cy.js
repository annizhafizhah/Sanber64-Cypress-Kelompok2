describe('My Account > Edit Account Information & Edit Address', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ291dFN1Y2Nlc3Mv/')
    cy.get('#email').type('kelompok2@mail.com');
    cy.get('#pass').type('Kelompok2');
    cy.get('#send2').click(); // Jika tombol memiliki ID "send2"
  })

  it('Positive Case: Edit Account Information Successfully', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
    cy.get('#firstname').clear().type('Kelompok')
    cy.get('#lastname').clear().type('Dua Sanber')
    cy.get('button[title="Save"]').click()
    cy.contains('You saved the account information.').should('be.visible')
  })
  it('Negative Case: Edit Account Information without First Name', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
    cy.get('#firstname').clear()
    cy.get('button[title="Save"]').click()
    cy.contains('This is a required field.').should('be.visible')
  })

  it('Negative Case: Edit Account Information without Last Name', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
    cy.get('#lastname').clear()
    cy.get('button[title="Save"]').click()
    cy.contains('This is a required field.').should('be.visible')
  })
})