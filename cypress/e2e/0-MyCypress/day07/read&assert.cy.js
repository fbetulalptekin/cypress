describe('Read and Assert from files', () => {
    it('Read', () => {
        cy.readFile('cypress/fixtures/users.json').then((userdata) => {

            expect(userdata[0].name).to.equal('Leanne Graham')
        })
    });
});

describe('Read and Assert from Files', () => {
    it('Read and Assert', () => {
        
        cy.readFile('cypress/fixtures/users.json').then((userdata) => {
            expect(userdata[7].name).to.equal('Nicholas Runolfsdottir V')
            expect(userdata[7].username).to.equal('Maxime_Nienow')
            expect(userdata[7].email).to.equal('Sherwood@rosamond.me')
        })

        
    });
});