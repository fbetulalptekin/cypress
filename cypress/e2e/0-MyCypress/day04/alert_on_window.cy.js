describe('JS alert islemleri', () => {
    it('JS alert click', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click()   //Cypress default olarak Tamam(Ok)'e tıklar
        cy.get('#result').should('have.text', 'You successfully clicked an alert')

    });
    it('JS alert confirm', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click() // default olarak Tamam(Ok)'e tıkladi
        cy.get('#result').should('have.text', 'You clicked: Ok')

    });
    it('JS alert dismiss', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click()

        // burada bir metot olusturarak alert penceresine gecer, cancel i tiklatiriz
        //on() fonksiyonu JQuery fonksiyonudur. Browser'da pencerelerin kontrolünü sağlar
        cy.on('window:confirm', () => {
           
            return false;
        })
        
        cy.get('#result').should('have.text', 'You clicked: Cancel')

    });
    it.only('JS alert prompt', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            // JavaScript alert penceresini acariz
            cy.get(':nth-child(3) > button').click()

        
    });

});