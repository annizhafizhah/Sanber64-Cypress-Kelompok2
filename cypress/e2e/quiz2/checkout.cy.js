describe('Magento Checkout Automation', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ291dFN1Y2Nlc3Mv/');
        cy.get('#email').type('kelompok2@mail.com');
        cy.get('#pass').type('Kelompok2');
        cy.get('#send2').click();
    });

    // Positive Case 1: Successfully add a product to cart and complete checkout
    it('Should add a product to cart and complete checkout', () => {
        cy.get('.input-text').type('Savvy Shoulder Tote{enter}');
        cy.get('[alt="Savvy Shoulder Tote"]').click();
        cy.get('#product-addtocart-button').click();
        cy.wait(5000);
        cy.get('.showcart').click()
        cy.get('#top-cart-btn-checkout').click();
        cy.get('#customer-email.input-text').type('kelompok2@mail.com');
        cy.get('[name="firstname"]').type('Kelompok');
        cy.get('[name="lastname"]').type('Sanber Dua');
        cy.get('[name="street[0]"]').type('Jln Gotong Royong');
        cy.get('[name="city"]').type('Jakarta Tenggara');
        cy.get('[name="region_id"]').select('New York');
        cy.get('[name="postcode"]').type('12345');
        cy.get('[name="telephone"]').type('08123456789');
        cy.get('input[name="ko_unique_1"]').check();
        cy.get('.button.action.continue.primary').click();
        cy.get('.action.primary.checkout').click();
        cy.contains('Thank you for your purchase').should('be.visible');
    });

    // Positive Case 2: Successfully login before checkout
    it('Should login and complete checkout', () => {
        cy.get('.signup').click();
        cy.get('#email').type('kelompok2@mail.com');
        cy.get('#pass').type('Kelompok2!');
        cy.get('#send2').click();
        cy.contains('Welcome, Kelompok Sanber Dua').should('be.visible');
        cy.get('[name="q"]').type('T-shirt{enter}');
        cy.get('.product-item-link').first().click();
        cy.get('#product-addtocart-button').click();
        cy.get('.action.showcart').click();
        cy.get('a.viewcart').click();
        cy.get('.checkout-methods-items button').click();
        cy.get('.action.primary.checkout').click();
        cy.contains('Thank you for your purchase').should('be.visible');
    });

    // Positive Case 3: Checkout with different shipping address
    it('Should complete checkout with a different shipping address', () => {
        cy.get('[name="q"]').type('Shoes{enter}');
        cy.get('.product-item-link').first().click();g
        cy.get('#product-addtocart-button').click();
        cy.get('.action.showcart').click();
        cy.get('a.viewcart').click();
        cy.get('.checkout-methods-items button').click();
        cy.get('#customer-email').type('testuser@example.com');
        cy.get('[name="firstname"]').type('Kelompok');
        cy.get('[name="lastname"]').type('Sanber Dua');
        cy.get('[name="street[0]"]').type('Jln Gotong Royong');
        cy.get('[name="city"]').type('Jakarta Tenggara');
        cy.get('[name="region_id"]').select('New York');
        cy.get('[name="postcode"]').type('12345');
        cy.get('[name="telephone"]').type('08123456789');
        cy.get('input[name="ko_unique_1"]').check();
        cy.get('.button.action.continue.primary').click();
        cy.get('.action.primary.checkout').click();
        cy.contains('Thank you for your purchase').should('be.visible');
    });

    // Negative Case 1: Attempt checkout with missing required fields
    it('Should fail checkout when required fields are missing', () => {
        cy.get('[name="q"]').type('Hat{enter}');
        cy.get('.product-item-link').first().click();
        cy.get('#product-addtocart-button').click();
        cy.get('.action.showcart').click();
        cy.get('a.viewcart').click();
        cy.get('.checkout-methods-items button').click();
        cy.get('.button.action.continue.primary').click();
        cy.get('.action.primary.checkout').click();
        cy.contains('This is a required field').should('be.visible');
    });

    // Negative Case 2: Attempt checkout with invalid email format
    it('Should show an error for invalid email format', () => {
        cy.get('[name="q"]').type('Bag{enter}');
        cy.get('.product-item-link').first().click();
        cy.get('#product-addtocart-button').click();
        cy.get('.action.showcart').click();
        cy.get('a.viewcart').click();
        cy.get('.checkout-methods-items button').click();
        cy.get('#customer-email').type('kelompokdua');
        cy.get('.button.action.continue.primary').click();
        cy.contains('Please enter a valid email address').should('be.visible');
    });
});