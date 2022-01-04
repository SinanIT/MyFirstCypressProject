describe('navigations',()=>{
    it.skip('Back, forward, refresh', ()=>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/');
        
        //cy.wait(2000) har wait on cypress

        // click login
        cy.contains('Log in').click()

        //BACK
        //cy.go('back')
        //or
        cy.go(-1)

        //FORWARD
        //cy.go('forward')
        //or
        cy.go(1)

        //REFRESH
        cy.reload()

    })

    it('chaining navigations',()=>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/');
        cy.contains('Log in')
        .click()
        .go('back')
        .go('forward')
        .go('back')
        .reload(true).contains('Log in').should('be.visible')
    })
    
})