describe("Move Ower", ()=>{
    it.skip('Hover Owerr Test', ()=>{
        cy.visit('https://www.amazon.com/')
        cy.wait(2000)
        cy.get("a[id='nav-link-accountList']").trigger('mouseover')
        cy.wait(3000)

    })
    
    it('Hover Owerr Test', ()=>{
        cy.visit('https://www.amazon.com/')
        cy.wait(2000)
        cy.get(".icp-nav-link-inner").trigger('mouseover')
        cy.contains("Change country/region.").click()
        cy.get("#icp-selected-country").select('France', {force: true})
        

    })
})