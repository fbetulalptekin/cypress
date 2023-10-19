describe('Scroll islemleri', () => {

    it.skip('Sayfayi belirli bir yere kaydirma', () => {
        cy.visit('https://tripandway.com/')
        cy.get('.portfolio-page > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2')
        .scrollIntoView({duration: 3000})
        cy.get('.featured-package > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2')
        .scrollIntoView()
        // scrollIntoView() , locate'i alinan yere kaydirir
        // scrollIntoView({duration: 3000}) , locate'i alinan yere bu kadar surede gider

    });

    it.skip('Istedigimiz koordinata kaydirma', () => {
        cy.visit('https://tripandway.com/')
        cy.scrollTo(70,300)
        cy.get('.col > .main-headline > .headline > h2').scrollIntoView()
        cy.wait(3000)
        cy.scrollTo(0,1) // sayfanin basina cikar
        cy.wait(3000)
        cy.get('.blog-area > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView()
        cy.wait(3000)
        cy.scrollTo(0,500) // asagi inmek icin
        cy.wait(3000)
        cy.scrollTo(0,-500) // yukari cikmak icin
    
    });

    it('Koordinatla gitme', () => {
        cy.visit('https://tripandway.com/')
        cy.get('.team-area > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2')
        .scrollIntoView({top: 300, left:0})
    });
});