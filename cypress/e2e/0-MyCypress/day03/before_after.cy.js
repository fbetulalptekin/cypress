describe('Before after islevleri', () => {

    before(() => {   //tum testlerden once bir kere calisir
        cy.visit('/')  
    })

    beforeEach(() => {   //her bir testten once calisir
        cy.log('yeni bir test basliyor') 
    });

    it('cy.get komutu', () => {
        cy.get('#APjFqb').type('cypress{enter}')
    });


    afterEach(() => { //her bir testten sonra calisir
        cy.log('Bir test tamamlandi, digerine geciliyor') 
    });

    after(() => {   //tum testlerden sonra calisir
        cy.log('Tüm testlar sonlandiriliyor') 
    });
    
});