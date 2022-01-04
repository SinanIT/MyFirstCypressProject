describe('Aletrs' , ()=>{
    it('Alert menu', ()=>{

        //cypress automatically accepts alert when you click on it
        // we don't see the pop up alert window
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get(':nth-child(1) > button').click()

        // Assert the alert text is matching You successfully clicked an alert
        cy.get('#result').should('have.text', 'You successfully clicked an alert')

    })
    //accept
    it('Acceep Alert', ()=>{

        //cypress automatically accepts alert when you click on it
        // we don't see the pop up alert window
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get(':nth-child(2) > button').click()
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it('Dismiss alert', ()=>{

        //cypress automatically accepts alert when you click on it.
        // we don't see the pop up alert window
        //With Cypress we can control the browser events using function os is a 
        // jquery function
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get(':nth-child(2) > button').click()

        //window is object: confirm is functionality
        // jquery function
        cy.on('window:confirm',(str)=>{
            return false//DEFAULT CYPERS BEHAVIOUR
        })
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    it('Sending test on the alert pop up', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        //With Cypress we can control the browser events using function os is a 
        // jquery function

        // to send a text we will use another jquery function window()
        cy.window().then(($windowElement)=>{
            cy.stub($windowElement, 'prompt').returns('Sinan')
        })
        cy.get(':nth-child(3) > button').click()
        //asserting result
        cy.get('#result').should('have.text', 'You entered: Sinan')
    })

    
})