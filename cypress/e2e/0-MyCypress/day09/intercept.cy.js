describe('Intercept', () => {
    it('Test01', () => {
        cy.visit('https://example.cypress.io/commands/waiting')
       
        // cy.intercept('GET', 'https://jsonplaceholder.cypress.io/comments/1') -->1.yol
       
       // Listen to GET to comments/1
       cy.intercept('GET', '**/comments/**').as('getComment') 
       // as ile daha sonra kullanmak uzere degisken atadik; atanan degiskeni basina @ koyarak cagiriyoruz
       
       // we have code that gets a comment when
       // the button is clicked in scripts.js
       cy.get('.network-btn').click()
       
       // wait for GET comments/1
       cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304])
        
    });
});