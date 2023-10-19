describe('', () => {

    beforeEach(() => {  // beforeEach her bir it blogundan once calisir
        cy.visit('https://www.google.com')
    });

    it('title testi', () => {
        cy.title().should('eq', 'Google')
    });

    it('url test', () => {
        cy.url().should('include','google')
    });
});