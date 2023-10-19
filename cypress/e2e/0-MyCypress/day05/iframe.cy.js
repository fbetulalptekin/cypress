describe('', () => {
    //https://gitlab.com/kgroat/cypress-iframe adresinden aldigimiz komutu 
    //terminale yazarak kurulum yaptik <<npm install -D cypress-iframe>>
    //require('cypress-iframe') kodunu e2e.js dosyasına ekledik.
    //Bu sayede cy.frameLoaded ve cy.iframe komutlarını kullanabiliriz
    it('iframe testi', () => {

    cy.visit('https://the-internet.herokuapp.com/iframe')
    //driver.switchTo.frame(locate) >> selenium da boyle yapiyorduk

    cy.frameLoaded('#mce_0_ifr')
    // iframe in html kodlarindan p tagini bulup silme islemi (bu tag da text vardi, onu sildik):
    cy.iframe().find('p').clear()
    cy.iframe().find('p').type('Hello World')
    cy.screenshot()
    cy.iframe().find('p').should('have.text', 'Hello World')
    cy.get('.large-4 > div').should('contains.text','Elemental Selenium')
    cy.get('.large-4 > div').click()

    // not: ctrl + c terminali durdurur
    });
});