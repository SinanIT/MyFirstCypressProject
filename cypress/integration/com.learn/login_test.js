describe('Log in', ()=>{
    it('Test case 1', ()=>{
    // go to the url liek get in selenium
    cy.visit('https://qa-environment.crystalkeyhotels.com/');

    cy.contains('Log in').click()
    // username: manager
    // pass: Manager2
    // click submit button
    cy.get('#UserName').type('manager')
    cy.get('#Password').type('Manager2!')
    cy.get('#btnSubmit').click()
    cy.url().should('include', '/Admin/UserAdmin')
})
    it('Login with general method', ()=>{
        cy.login('manager', 'Manager2!')// login method created in command.js
        cy.url().should('include', '/Admin/UserAdmin')

    })

    it('Invalid Login with general method', ()=>{
        cy.login('manager', 'Manager2')// login method created in command.js
        cy.contains('Wrong password').should('be.visible')
        cy.url().should('include', 'LogOnWithCaptcha')

    })
    cy.get(':nth-child(5) > .blog-img')


})