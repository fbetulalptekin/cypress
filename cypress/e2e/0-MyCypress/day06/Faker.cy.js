import { Faker, faker } from '@faker-js/faker';
describe('Faker kullanimi', () => {
    /*
    KURULUM İŞLEMİNİ
    www.npmjs.com adresine gidelim
    npm install --save-dev @faker-js/faker ile kurulum yapılır
    
    Cypress'te üç farklı değişken tanımlaması yapılır
    let variableName=     değer atanabilir ve değiştirilebilir
    var variableName=     değer atanabilir ve değiştirilebilir
    const variableName=   değer atanır ve değiştirilemez
    */
    it('automationexercise Login', () => {
     cy.visit('https://www.automationexercise.com/')
     cy.get('.shop-menu > .nav > :nth-child(4)').click()

     let firstName = faker.person.firstName('female');
     let lastName = faker.person.lastName();

     cy.get('[data-qa="signup-name"]').type(firstName + ' ' + lastName)

     let email = faker.internet.email({firstName, lastName}) 
     // email parantezinin ici bos da olabilirdi; burada ad soyad ile uyumlu olsun istedigimden boyle kullandim

     cy.get('[data-qa="signup-email"]').type(email)
     cy.get('[data-qa="signup-button"]').click()

     cy.log('Sign Up sayfasi aciliyor')
     cy.get('#id_gender2').click()

     let password = faker.internet.password()
     cy.get('[data-qa="password"]').type(password)

     cy.get('[data-qa="first_name"]').type(firstName)
     cy.get('[data-qa="last_name"]').type(lastName)

     let address = faker.location.streetAddress(false) // -parantez icindeki false tam adres olmasin demek-
     cy.get('[data-qa="address"]').type(address)
     
     cy.get('[data-qa="country"]').select(1)
     
     let state = faker.location.state()
     cy.get('[data-qa="state"]').type(state)
    
     let city = faker.location.city()
     cy.get('[data-qa="city"]').type(city)
     
     let zipcode = faker.location.zipCode('#####')
     cy.get('[data-qa="zipcode"]').type(zipcode)

     let phoneNumber = faker.phone.number('+909-###-####-####')
     cy.get('[data-qa="mobile_number"]').type(phoneNumber)

     cy.get('[data-qa="create-account"]').click()

     cy.get('b').should('contains.text', 'Created')






    });
});