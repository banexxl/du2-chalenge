describe('Successfull Login Test', () => {
          it('passes', () => {
                    cy.visit('http://localhost:3000/')

                    //cekamo proizvode
                    cy.wait(5000)

                    //login stranica
                    cy.get('[href="/auth/login"]').click()

                    //click na login dugme
                    cy.get('#loginbadge').click()

                    cy.get('#username').type("sdsdsd")
                    cy.get('#password').type("sdsdsd")

                    cy.get('#buttonlogin').click()

                    cy.wait(3000)
                    cy.get('.MuiAlert-message').contains("Invalid username and/or password!")

                    cy.get('#username').clear()
                    cy.get('#password').clear()

                    cy.get('#username').type("mor_2314")
                    cy.get('#password').type("83r5^_")


                    cy.get('#buttonlogin').click()
                    cy.wait(1500)
                    cy.get('.MuiAlert-message').contains('Successfully logged in')

                    cy.wait(3000)

          })
})