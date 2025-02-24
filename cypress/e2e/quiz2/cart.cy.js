describe('Shopping Cart > Add, edit or Remove Products in the Cart', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ291dFN1Y2Nlc3Mv/');
    cy.get('#email').type('kelompok2@mail.com');
    cy.get('#pass').type('Kelompok2');
    cy.get('#send2').click(); 
  })

  it('Positive Case - Successfully added the product to the cart', () => {
    cy.get('.input-text').type('Savvy Shoulder Tote{enter}');
    cy.get('[alt="Savvy Shoulder Tote"]').click();
    cy.get('#product-addtocart-button').click();
    cy.wait(5000);
    cy.get('.showcart').click()
    cy.get('a').contains('Savvy Shoulder Tote').should('be.visible')
  })

})