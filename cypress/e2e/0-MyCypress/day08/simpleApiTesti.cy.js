describe('Api assertion', () => {
    it('Api assertion 1', () => {
       cy.request('https://jsonplaceholder.cypress.io/comments').
       its('headers').its('date').should('include', 'Thu, 26 Oct 2023') 
    });

    it('Api assertion 2', () => {
        cy.request({
            url: 'https://jsonplaceholder.cypress.io',
            method: 'GET',
         }).its('headers').its('date').should('include', 'Thu, 26 Oct 2023')
    });
});