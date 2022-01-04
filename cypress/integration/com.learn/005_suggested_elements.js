describe('Suggested elemenets', ()=>{
    it.skip('Suggested elements', ()=>{
        cy.visit('https://google.com/')

        //send the input and select a suggested option from ddown menu that includes 'map'
        cy.get("input[name='q']").type('usa')
        cy.wait(3000)
        cy.get('li span b').contains('jobs').click()

    })
    
    it('Suggested elements 2', ()=>{
        cy.visit('http://automationpractice.com/index.php')

        //send the input and select a suggested option from ddown menu that includes 'map'
        cy.get("input[id='search_query_top']").type('dress')
        cy.wait(3000)
        cy.get('.ac_results').contains('Blouse').click()//is there is dupplicate will click first one
        //assertion
        cy.get("h1[itemprop='name']").should('be.visible')

    })
})