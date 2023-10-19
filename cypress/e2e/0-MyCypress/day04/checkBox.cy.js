describe('Checkbox metotlari', () => {
    it.skip('Checkbox secimi', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')

        cy.get('#checkboxes > :nth-child(1)').check().should('be.checked')
        cy.get('#checkboxes > :nth-child(3)').uncheck().should('not.be.checked')

    });

    it.skip('Sirasina gore secme', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        cy.wait(5000)
        cy.get("input[type='checkbox']").eq(1).uncheck()
        cy.wait(5000)
        cy.get("input[type='checkbox']").first().check()  // first() >> eq(0)
        
        // bu testi unique bir locate bulamazsak yapabiliriz.
        // get() parantezin icinde bulunan ifade html kodlarindan aldigimiz css 

    });

    it.skip('Toplu Check', () => {
        cy.visit('https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb')
        //cy.get("input[type='checkbox']").check()
        //cy.get("input[type='checkbox']").eq(11).check().should('be.checked')
        //cy.get("input[type='checkbox']").eq(16).check().should('be.checked')
        //cy.get("input[type='checkbox']").eq(24).check().should('be.checked')
        //cy.get("input[type='checkbox']").eq(35).check().should('be.checked')
        //cy.get("input[type='checkbox']").eq(40).check().should('be.checked')
        //cy.get("input[type='checkbox']").eq(45).check().should('be.checked')
        //cy.get("input[type='checkbox']").eq(50).check().should('be.checked')
        //cy.get("input[type='checkbox']").eq(55).check().should('be.checked')
        //cy.get("input[type='checkbox']").eq(60).check().should('be.checked')
        //cy.get("input[type='checkbox']").eq(65).check().should('be.checked')
        cy.get("input[type='checkbox']").check({multiple: true},).should('be.checked')

        // coklu secim yapmamiz gerektiginde yukardaki gibi html kodlarindan type'i checkbox olanlari alip
        // istedigimizi tiklatabiliriz 

        // ancak burdaki ornekte her tiklamada sayfa ona gore filtrelenip yenilendigi icin bazi checkboxlara tiklayamadik

    });

    it.skip('radioButton secimi', () => {
        cy.visit('https://www.sundubisiklet.com/urunler/4-tasiyici/69-cocuk-tasima')
        cy.get(':nth-child(3) > .sidebar-contant > .discount > li > .radio > label').scrollIntoView()
        cy.get("input[type='radio']").check({force: true}).should('be.checked')
        // bu testte de yukardaki gibi gorememe hatasi var

    });

    it.skip('radioButton 2', () => {
        cy.visit('https://www.sundubisiklet.com/urunler/4-tasiyici/69-cocuk-tasima')

        cy.get('.radio > label').each((radioButton) => {
              radioButton.trigger('click');
              
        });

        // bu testte her bir radio button a tiklamak icin bir metot oluşturdum
        // passed olsa da her birini ayri ayri secemedi

    });

    it('radio', () => {
        cy.visit('https://www.sundubisiklet.com/urunler/4-tasiyici/69-cocuk-tasima')
        cy.get(':nth-child(3) > .sidebar-contant > .discount > li > .radio > label').scrollIntoView()
        cy.wait(2000)
        cy.get("input[type='radio']").eq(0).check({force: true}).should('be.checked')
        cy.wait(2000)
        cy.get("input[type='radio']").eq(1).check({force: true}).should('be.checked')
        cy.wait(2000)
        cy.get("input[type='radio']").eq(2).check({force: true}).should('be.checked')
        cy.wait(2000)
        cy.get("input[type='radio']").eq(3).check({force: true}).should('be.checked')
        cy.wait(2000)
        cy.get("input[type='radio']").eq(4).check({force: true}).should('be.checked')
        cy.wait(2000)
        cy.get("input[type='radio']").eq(5).check({force: true}).should('be.checked')
        // burda araya waitler atip teker teker tiklattik
    });


});