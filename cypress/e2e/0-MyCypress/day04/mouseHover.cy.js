describe('Hover over', () => {
    it('trigger mouse over', () => {
        cy.visit('https://amazon.com')
        cy.get('.icp-nav-link-inner > .nav-line-2').trigger('mouseover')
        cy.get('#nav-flyout-icp > .nav-template > #icp-flyout-mkt-change > .nav-text > .icp-mkt-change-lnk').click()
        cy.get('.a-dropdown-prompt').click()
        cy.get('#icp-dropdown_18').click()
        cy.get('.a-button-input').click()
        });

    it.only('reload', () => {
        cy.visit('https://amazon.com')
        cy.reload() // sayfayi refresh eder
        cy.wait(3000) 
        cy.reload(true) // sayfayi catch'lerden degil sifirdan refresh eder; (cookielere kaydedip ordan çagirmaz)

    });    
});