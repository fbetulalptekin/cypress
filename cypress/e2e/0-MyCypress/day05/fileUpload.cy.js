describe('File upload', () => {
    it('Single File Upload', () => {
        //cypress-file-upload Plugin yüklenmelidir
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const file1 = "test1.jpg"
        cy.get('#filesToUpload').attachFile(file1)
        cy.get('#fileList > li').should('include.text', 'test1')
    });

    it('Multiple File Upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const file1 = "test1.jpg"
        const file2 = "tests.jpg"
        cy.get('#filesToUpload').attachFile(file1).attachFile(file2)
        cy.get('#fileList > li').should('include.text', 'tests')

    });

    it.only('Multiple File Upload 2', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const file1 = "test1.jpg"
        const file2 = "tests.jpg"
        cy.get('#filesToUpload').attachFile([file1, file2])
    });

    it.skip('Multiple File Upload 3', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const file1 = "test1.jpg"
        const file2 = "tests.jpg"
        cy.get('#filesToUpload').attachFile({filePath: file1, fileName:'test1.jpg', filePath: file2, fileName:'tests.jpg'})
        // bu yolla da olur ama kabul etmedi, hata verdi
    });
    
});