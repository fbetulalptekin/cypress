describe('Custom commands', () => {
    it('Pozitif login testi', () => {
        cy.visit('https://qa.qualitydemy.com/')
        cy.get('.btn-sign-in-simple').click()
        cy.get('#login-email').type('mb@babayigit.net')
        cy.get('#login-password').type('M123456.b{enter}')
    });

    it('Komut ile pozitif login testi', () => {
        cy.Login('mb@babayigit.net', 'M123456.b')
    });

    it.only('Komutla negatif login testi', () => {
        cy.Login('murat@babayigit.net','M123456b')
    });
});