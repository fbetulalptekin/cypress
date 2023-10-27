describe('POST islemi', () => {
    const requestUrl = 'https://jsonplaceholder.cypress.io/comments'
    it('Test01', () => {
        cy.request('POST',requestUrl, {
 
            "userID": 501,
            "title": "Tester",
            "name": "Terese"
        }).should((response) => {
            expect(response.body.title).to.equal('Tester')
            expect(response.body.name).to.equal('Terese')
        })
        
    });
});