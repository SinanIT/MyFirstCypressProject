describe('check Box', ()=>{
    it('Checkimg songle box', ()=>{
        // go to:
        cy.visit('http://automationpractice.com/index.php')
        //click WOMEN:
        cy.get(".sf-with-ul").first().click() // clict on the first element
        cy.get('#layered_category_4').should('not.be.checked')
        //checking the box
        cy.get('#layered_category_4').check()
        cy.get('#layered_category_4').should('be.checked')

        // uncheck

        cy.get('#layered_category_4').uncheck()
        cy.get('#layered_category_4').should('not.be.checked')
    })

    it('Check all test boxes', ()=>{
        cy.visit('http://automationpractice.com/index.php')
        //click WOMEN:
        cy.get(".sf-with-ul").first().click() // clict on the first element
        //input[type='checkbox'] return al check boxes
        cy.get("input[type='checkbox']").check()
        cy.wait(3000)
        cy.get("input[type='checkbox']").uncheck()

        // HOW WE UNDERSTAND IIF CHEK BOX IS CHECKED OR NOT
    })

    // HOW WE UNDERSTAND IIF CHEK BOX IS CHECKED OR NOT
    it.only('Check all test boxes', ()=>{
        cy.visit('http://automationpractice.com/index.php')
        //click WOMEN:
        cy.get(".sf-with-ul").first().click() // clict on the first element
        //input[type='checkbox'] return al check boxes
        cy.get("input[type='checkbox']").first().click({multiple : true})
        
        cy.get("input[type='checkbox']").should('be.checked')

        //The change is  in the span element
        //when a check box is cjecked the parent span has value of 'checked'
        //ASSERT IF TH RPARENT SPAN CLASS VALUE IS CHECKED

        cy.get("input[type='checkbox']")
        .first()// checking first element
        .parent() // getting the parent element whic is span
        .should('have.class', 'checked')
        //.should('have.id', 'id value')
        //.should('have.type', 'type value')
        //.should('have.class', 'clas value')
    })
})