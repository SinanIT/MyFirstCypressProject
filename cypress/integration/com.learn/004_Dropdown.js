describe('Dropdown' , ()=>{
    it('Dropdown menu', ()=>{
        cy.visit("https://the-internet.herokuapp.com/dropdown")

        //selectmethod

        //locate the dropdown element
        // use select method 
        cy.get('#dropdown').select('Option 1').should('have.value', '1')

        cy.wait(2000)
        cy.get('#dropdown').select('Option 2').should('have.value', '2')
        


    })
    
})