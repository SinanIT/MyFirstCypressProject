describe('Scroll', ()=>{
    it('Scroll into view', ()=>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/');

        //scrollIntoView()
        cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2').scrollIntoView();
        cy.wait(2000)
        cy.get(':nth-child(1) > .form-group > .wrap > label').scrollIntoView()
        cy.wait(2000)
        cy.scrollTo(0, 1500)
    })
})