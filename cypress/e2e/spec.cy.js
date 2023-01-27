describe('Checkout Test', () => {
          it('passes', () => {
                    cy.visit('http://localhost:3000/')

                    cy.wait(5000)

                    //add products
                    cy.get(':nth-child(1) > .button_btn__7rFQD').click()
                    cy.get(':nth-child(1) > .button_btn__7rFQD').click()
                    cy.get(':nth-child(1) > .button_btn__7rFQD').click()

                    //cart button
                    cy.get('.container_container__wmKTy > :nth-child(1) > .headerStyles_header_content__tAwG5 > :nth-child(3) > a').click()

                    //checkout button
                    cy.get('a > .button_btn__7rFQD').click()

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
                    cy.get('.form_error__cReGm').contains("Please enter a valid email")

                    cy.get('#email').clear()
                    cy.get('#email').type("damjanovic.branislav@gmail.com")
                    cy.get('button').click()

                    //submit
                    cy.get('.MuiModal-root > .MuiBox-root').click()

          })
})