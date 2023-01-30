describe('Checkout Test', () => {
          it('passes', () => {
                    cy.visit('http://localhost:3000/')

                    cy.wait(3000)

                    //add products
                    cy.get('Button[id="add2cart"]').eq(0).click()
                    cy.get('Button[id="add2cart"]').eq(1).click()
                    cy.get('Button[id="add2cart"]').eq(2).click()

                    //cart button
                    cy.get('span[id="cartbadge"]').click()

                    //checkout button
                    cy.get('Button[id="checkout"]').click()

                    //form
                    cy.get('#firstName').type("Branislav")
                    cy.get('#lastName').type("Damjanovic")
                    cy.get('#streeAddress').type("Bulevar Oslobodjenja")
                    cy.get('#city').type("Novi Sad")
                    cy.get('#zipCode').type("21000")
                    cy.get('#phone').type("066415651")
                    cy.get('#email').type("sdsd")

                    cy.get('#phone').click()

                    //provera error poruke
                    cy.contains("Please enter a valid email")

                    cy.get('#email').clear()
                    cy.get('#email').type("damjanovic.branislav@gmail.com")
                    cy.get('button').click()

                    //submit
                    cy.get('.MuiModal-root > .MuiBox-root').click()

          })
})