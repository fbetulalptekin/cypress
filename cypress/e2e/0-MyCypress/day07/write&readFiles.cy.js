describe('Write and Read Files', () => {
    it('Write file', () => {
        cy.writeFile('C:/Users/fbalp/OneDrive/Masaüstü/cypress/cypress/fixtures/ornek.json', '{"userName": "user",\n "password": "password"}')
    });
    it.only('Read file', () => {
        cy.readFile('C:/Users/fbalp/OneDrive/Masaüstü/cypress/cypress/fixtures/ornek.json').then((user) => {
            expect(user[0].password).to.equal('password');
        })   // bu calismadi
    
    });
});