describe('Go to the application', ()=>{
    it('Test case 1', ()=>{
        // go to the url liek get in selenium
        cy.visit('https://qa-environment.crystalkeyhotels.com/');

        cy.contains('Log in').click()
        //veriftying if the user in on login page
        // will check if the url contains account logon

        cy.url().should('include', 'Account/Logon')
    })

}
)