describe('Locate alma ve search', () => {

    beforeEach(() => {
        cy.visit('/')
    });
    it('cy.get komutu', () => {
        cy.get('#APjFqb').type('cypress{enter}')
    });
    
});

// id ile locate alirken << cy.get(' >> ten sonra # ile baslar; class ile alirken ise . ile baslar