describe('Multiple windows', ()=>{
    it('Handling windows by removing target', ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        
        //remove tarhet attribute to open new window in same window
        //invoke('removeAttr','attribute name')
        cy.get('.example > a').invoke('removeAttr','target').click()

        //asserting new windows is open
        cy.get('h3').should('have.text', 'New Window')

    })
    it('Opening in the new url', ()=>{
        //we will get the values of href and store it in a variable
        // then open in same window

        // we will use th jquery method prop() with then() to use prop function
        cy.visit("https://the-internet.herokuapp.com/windows")
        
        cy.get('.example > a')// click here element
        .then((element) =>{
           const newURL=  element.prop('href')// getting the value of href attribute
        cy.visit(newURL)
        })

        cy.get('h3').should('have.text', 'New Window')
    })

})