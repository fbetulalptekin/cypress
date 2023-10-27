describe('Expect test', () => {
    const requestUrl = 'https://jsonplaceholder.cypress.io/comments'

    it('Test01', () => {
        cy.request(requestUrl).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body[201].email).to.eq('Donnell@polly.net')
        })
    });
    it('Test02', () => {
        cy.request({
            url: requestUrl,
            method: 'GET'
        }).should((response) => {
            expect(response.body[0].postId).to.eq(1)
        });


    });
});