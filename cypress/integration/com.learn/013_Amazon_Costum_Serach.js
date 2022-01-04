describe('Search', ()=>{
    it('Amazon search test', ()=>{
        cy.amazonSearch('teapot')
        cy.title('.a-color-state').should('include', 'teapot')
       // cy.screenshot() if you run the test on runer we need to add this method
       // but if we run on terminal it will takek screenshot automatically
    

    })
})