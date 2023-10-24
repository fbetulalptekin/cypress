describe('Json ile login testi', () => {

    let data; // 'data' değişkenini test süresince kullanmak için dışarıda tanımladik.

    before(function() {
        cy.fixture('qualityDemy.json').then(function(jsonData) {
            // Fixture'dan gelen verileri 'data' değişkenine atadik.
            data = jsonData;
        });
    });

    it('Login testi', () => {
        // 'data' değişkeni ile URL'ye gidiyoruz
        cy.visit(data.url);
        cy.contains('log in', { matchCase: false }).click();
        // Kullanıcı adı ve şifre gibi verileri girmek için de 'data' değişkenini kullanıyoruz
        cy.get('#login-email').type(data.email);
        cy.get('#login-password').type(data.password);
        cy.get('#sign_up > :nth-child(3) > .btn').click();
        

    });
});
