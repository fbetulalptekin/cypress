describe('Delete', () => {
    const reqUrl = 'https://dummy.restapiexample.com/api/v1/delete/2'
    it('test01', () => {
        cy.request({
            url: reqUrl,
            method: 'DELETE'
        }).then((response) => {
            assert.equal(response.body.message, "Successfully! Record has been deleted")})
    });
});