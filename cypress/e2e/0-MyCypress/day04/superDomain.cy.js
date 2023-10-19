describe('Super domain/ alt domain', () => {
    it('Ayni classta iki farkli visit', () => {
        cy.visit('https://the-internet.herokuapp.com')
        cy.visit('https://the-internet.herokuapp.com/dropdown')

        // cy.visit('https://amazon.com')

        // ayni it blogunda iki farkli adrese gitmek istersek hata aliriz
        // ama hatasız bi sekilde ayni adresin alt domain'lerine gidebiliriz
    });
    it('Farkli adres', () => {
        cy.visit('https://amazon.com')
        
        // farkli adrese gitmek icin 
        // yeni bir it blogu yani yeni bir test olusturmaliyiz
    });
    
});