describe('login testi', () => {
    it('qualitydemy login test', () => {
        cy.visit('https://qa.qualitydemy.com/')
        cy.get('.cookieButton > a').click()

        // 1.yontem - login yazısının locate ini alip tikladik
        // cy.get('.btn-sign-in-simple').click()

        // 2.yontem - login yazisini secip tikladik
        // cy.contains('Login').click()

        // 3.yontem  - buyuk-kucuk harf bakmaksizin elementi bulur ve tiklar
        cy.contains('log in', {matchCase:false}).click() 

        cy.get('#login-email').type('mb@babayigit.net')
        cy.get('#login-password').type('M123456.b')
        cy.get('#sign_up > :nth-child(3) > .btn').click()

        //2. yontem sign up a tiklamadan enter a basarak giris yaptik
        // cy.get('#login-email').type('mb@babayigit.net')
        // cy.get('#login-password').type('M123456.b{enter}')
    });
        
        
});