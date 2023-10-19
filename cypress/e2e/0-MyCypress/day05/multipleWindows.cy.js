describe('Multiple windows test', () => {
    it.skip('Attribute remove', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')


        cy.get('.example > a').invoke('removeAttr', 'target').click()
        cy.get('h3').should('have.text', 'New Window')
    });
    it('New url', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.wait(2000)

        cy.get('.example > a').then((element) => {
            const newUrl = element.prop('href')
            cy.visit(newUrl)
        })

        /*
       1- cy.get('.example > a'): Bu satır, HTML içeriğinde sınıfı "example" olan bir öğenin 
        altındaki bir bağlantı öğesini (<a>) seçmek için Cypress'in cy.get() işlevini kullanır.
         Yani, bu satır, "example" sınıfına sahip bir öğenin altındaki bir bağlantı öğesini bulur.

       2- .then((element) => { ... }): Bu satır, önceki seçimin sonuçlarını bir işlev içine alır. 
         Seçilen öğeyi temsil etmek için element ismini kullanırız. 
         Daha sonra bu öğe üzerinde çeşitli işlemleri gerçekleştirmek için bu işlevi kullanabiliriz.

       3- const newUrl = element.prop('href'): Bu satır, seçilen bağlantı öğesinin href özelliğini
         (yani bağlantının hedef URL'sini) alır ve newUrl adlı bir değişkene kaydeder. 
         Yani, bu satır, seçilen bağlantının URL'sini alır.

       4- cy.visit(newUrl): Bu satır, cy.visit() işlevini kullanarak Cypress ile yeni bir URL'yi ziyaret etmeyi sağlar. 
         newUrl değişkeni üzerindeki URL'yi kullanarak bu URL'yi ziyaret eder.
        */

        // yukardaki fonksiyonun amaci 
        // belirli bir HTML sayfasındaki "example"  sınıfına sahip bir bağlantı öğesini bulup
        // bu bağlantının hedef URL'ini alarak bu URL'i ziyaret etmektir.

        // yani click here yazisini sectik sonra onun üzerinde işlem yapabilmek için ona <element> dedik
        // ardindan ona ait href sayesinde acilacak url i bir sabit olarak tanimladik
        // ve ona tiklayip, -uzerinde islem yapabilmek için- yeni sayfanin acilmasini sagladik
    });
});