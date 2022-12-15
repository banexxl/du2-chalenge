describe('Jedan obican test :)', () => {
          it('passes', () => {
                    cy.visit('http://localhost:3000/')

                    cy.get('[href="/auth/login"]').click()

                    cy.get('.login_login_button__pOUWU').click()
                    cy.get('#username').type("sdsdsd")
                    cy.get('#password').type("sdsdsd")

                    cy.get('.login_login_button__pOUWU').click()


                    cy.get('.MuiAlert-message').contains("Invalid username and/or password!")

                    cy.get('#username').clear()
                    cy.get('#password').clear()

                    cy.get('#username').type("mor_2314")
                    cy.get('#password').type("83r5^_")


                    cy.get('.login_login_button__pOUWU').click()

                    cy.get('.headerStyles_user_actions__uujbj > :nth-child(2) > a')

                    cy.get('.headerStyles_user_actions__uujbj > :nth-child(1)').click()


          })
})