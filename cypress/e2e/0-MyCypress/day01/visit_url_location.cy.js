

describe('Temel Cypress Komutlari', () => {
    it('cy.visit komutu', () => {
        cy.visit('/') // base url tanimlandiysa
      //  cy.visit('https://www.google.com') // base url tanimli degilse
    });
   
    it('cy.visit komutu.2', () => {
        cy.visit('/about-us')
    });

    it('cy.title komutu', () => {
        cy.visit('/') // base url e gider
        cy.title().should('eq','Wise Quarter Course – Deliver more than expected') // title ın tam eslesme durumu
        cy.title().should('contain','expected') // title icin icerme durumu, case sensitive dir
        cy.title().should('include','Deliver')

    });

    it.only('cy.url ve cy.location', () => {
        cy.visit('/about-us')
        cy.url().should('eq','https://wisequarter.com/about-us/') // url tam esitlik durumuna bakar
        cy.url().should('include','wisequarter') // url in string icerme durumuna bakar
        cy.location('pathname').should('eq', '/about-us/') // pathname in about-us oldugunu dogrular
        
    });
});