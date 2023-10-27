describe('Create POST', () => {
    const reqUrl = 'https://dummy.restapiexample.com/api/v1/create'
    const bodyRequest = {"name":"test","salary":"123","age":"23"}
    it('test01', () => {
        cy.request({
            url: reqUrl,
            method: 'POST',
            body: bodyRequest
        }).should((response) => {
            expect(response.body.message).to.contain('Success');
            expect(response.body.data.name).to.eq('test')
        })
        
    });
});