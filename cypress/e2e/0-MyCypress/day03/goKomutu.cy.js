describe('Go komutu kullanimi', () => {
    it('', () => {
        cy.visit('/')
        cy.get('#APjFqb').type('application{enter}')
        cy.go('back') // cy.go(-1)
        cy.go('forward') // cy.go(1)
        cy.reload() // refresh icin
    });
});