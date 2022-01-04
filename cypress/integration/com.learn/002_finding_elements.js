describe('Finding elements', ()=>{
    it('get method', ()=>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/');
        cy.contains('Log in').click()

        //Assertings:
        cy.url().should('include', 'Logon')

        // Asssert if log in text is visible or not CSS locators for login text
        //.row > .mb-4'
        //h2.mb-4
        //h2[class=mb-4]

        //1 - get() is used to locate elments
        //should('be visible')
        cy.get('.row > .mb-4').should('be.visible')

        //finding total number of links that is cjild of li
        //assert the totsl is 33
        cy.get('li a').should("have.length", 29)


        // 2- find() is used to find any element after get()
        // get the single room and assert there is only matches

        cy.get("a[href='/Rooms/6']").should('have.length', 1)
        
        //we can also specifically find the a[href='/Rooms/6'] that is child of li
        cy.get('li').find("a[href='/Rooms/6']").should('have.length', 1)

        //within() find specific element used after get()
        //looks for specific elements with in that parent
        //1
        cy.get("a[href='/Rooms/318']").click()
        //2
        cy.get('li').find("a[href='/Rooms/318']").should('have.length', 1).click()
        //3  Parent:div.categories child:a[href='/Rooms/318']
        cy.get('div.categories').within( ()=>{
            cy.get("a[href='/Rooms/318']").should('have.length', 1).click()
        })

        // We should try get() to find element first
        //- if this fails to locate the element (it can be not visible, not unique) then try find()
        // if this not work try within()

    })

})