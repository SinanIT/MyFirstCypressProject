describe('IFrames', ()=>{

    /* I frame: it a page with in a page
    we need additioanl pluugin to hand I frame
1- install plugin: run on terminal npm install -D cypress-iframe
2- IMPORT PACKGAGE import 'cypress-iframe';

    */
    it("Handling IFrames", ()=>{
       cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.get('h3').should('contain.text', 'Editor') //assertion

        cy.frameLoaded('#mce_0_ifr');// switching I frame element
        cy.iframe().find('p').clear()
        cy.iframe().find('p').type('I am inside the I frame')
        
        // Cypress automatically go out from iframe
       cy.get('h3').should('contain.text', 'Editor') //assertion

    })
})