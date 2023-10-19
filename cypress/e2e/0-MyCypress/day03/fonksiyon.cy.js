describe('Locate almada Fonksiyon Islemi', () => {
    it('', () => {

        cy.visit('http://www.automationexercise.com')
        cy.get('.shop-menu >.nav > :nth-child(4)').click()

        cy.get('.login-form > h2').should('include.text','Login')

        // 2.yol >> fonksiyon olusturarak da kontrol saglanabilir
        cy.get('.login-form > h2').then(textControl => {
            expect(textControl.text()).to.contains('Login')
        })
        
    });
});