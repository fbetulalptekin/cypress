describe('Assertion test', () => {

    beforeEach(() => {
        cy.visit('https://qa.qualitydemy.com/')
        cy.get('.cookieButton > a').click()
        
    });

    it('', () => {
        // 1- have.text
        cy.get('.btn-sign-in-simple').should('have.text', 'Log in')

    });

    it('', () => {
           //2 cy.url().should() >> login adresinde login kelimesi geciyor mu 
           cy.get('.btn-sign-in-simple').click()
           cy.url().should('include','login')
    });
   
         
    it('', () => {
           //3 cy.title.should >> sayfanın title i istenen degere tam esit mi
           cy.get('.btn-sign-in-simple').click()
           cy.title().should('eq','Login | QualityDemy')
    });
          
    it('', () => {
           //4 be.visible >> element gorunur mu
           cy.get('.btn-sign-in-simple').click()
           cy.get('.text-14px').should('be.visible')
    });
             
    it('', () => {
           //5 include text >> element texti iceriyor mu
           cy.get('.btn-sign-in-simple').should('include.text','Log')
    });
          
});