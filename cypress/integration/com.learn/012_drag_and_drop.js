describe('Drag and Drop', ()=>{
    it('Drag and Drop', ()=>{
        cy.visit('http://demo.automationtesting.in/Static.html')
        cy.get('#node').drag('#droparea')
    })


    


})