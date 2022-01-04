describe('File Upload', ()=>{

    
    const path1= 'Screenshot (141).png'
    const path2= 'Screenshot (154).png'
    const path3= 'Screenshot (163).png'
    
    it('Single file upload', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload')
        .attachFile(path1)
    })

    it('Multiple file upload', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload')
        .attachFile([path1, path2, path3]);
    })

    it('Override file name', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path3= 'Screenshot (163).png'
        cy.get('#filesToUpload')
        .attachFile({ filePath: path3, fileName: 'customFileName.json' });
    })
})