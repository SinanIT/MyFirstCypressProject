// describe take two parameters. 1- Name of the funtio and function to create test cases

describe('My First Test', () => {
    it('Url test', () => {                  // it keyword used to create test cases. It takes twpparameters: Name of the function and function to create test cases
        cy.visit('https://www.google.com/')
        cy.url().should('include', 'google')
    })

    it('Title test', () => {
        cy.visit('https://www.google.com/')
        cy.title().should('eq', 'Google')
    })

  })