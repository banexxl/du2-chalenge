describe('Jedan obican test :)', () => {
          it('passes', () => {
                    cy.visit('http://localhost:3000/')

                    cy.get(':nth-child(1) > .button_btn__BQJip').click()
                    cy.get(':nth-child(2) > .button_btn__BQJip').click()
                    cy.get(':nth-child(3) > .button_btn__BQJip').click()

                    cy.get(':nth-child(3) > .button_btn__BQJip').click()

                    cy.get(':nth-child(10) > .button_btn__BQJip').click()
                    cy.get(':nth-child(10) > .button_btn__BQJip').click()

                    cy.get('.container_container__QiTfr > :nth-child(1) > .headerStyles_header_content__QN6Jk > :nth-child(3) > a').click()
                    cy.get('a > .button_btn__BQJip').click()

                    cy.get('#firstName').type("Branislav")
                    cy.get('#lastName').type("Damjanovic")
                    cy.get('#streeAddress').type("Bulevar Oslobodjenja")
                    cy.get('#city').type("Novi Sad")
                    cy.get('#zipCode').type("21000")
                    cy.get('#phone').type("066415651")
                    cy.get('#email').type("sdsd")

                    cy.get('#phone').click()

                    cy.get('.form_error__T0DRe').contains("Please enter a valid email")

                    cy.get('#email').clear()
                    cy.get('#email').type("damjanovic.branislav@gmail.com")
                    cy.get('button').click()

                    cy.get('.MuiModal-root > .MuiBox-root').click()

          })
})