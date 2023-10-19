///<reference types="Cypress" />
describe('DropDown locate', () => {
    it('DropDown menu', () => {
        cy.visit('https://the-internet.herokuapp.com/dropdown')

        cy.get('#dropdown').select('Option 1').should('have.value','1')
        cy.get('#dropdown').select('Option 2').should('have.value','2')
    });
});