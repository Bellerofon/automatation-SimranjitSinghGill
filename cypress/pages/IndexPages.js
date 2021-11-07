/// <reference types="cypress"/>

const loginPageTitle = 'Testers Hotel'
const usernameTextField = 'nth-child(1) > input'
const passwordTextField = 'nth-child(2) > input'
const submitBtn = '.btn'
const formLabel = 'Login'

function checkLogingPageTitle(cy){
    cy.title().should('eq', loginPageTitle)
}

function performValidLogin(cy, username, password, confirmationContent){
    cy.contains(formLabel)
    cy.get(usernameTextField).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(submitBtn).click()
    cy.contains(confirmationContent)

}

module.exports = {
    checkLogingPageTitle,
    performValidLogin
}

/*describe("Login", () => {
    it("Login user", () =>{
      cy.visit('http://localhost:3000')
      cy.get("h2").should("have.text","Login") // Correct page
      cy.get(":nth-child(1) > input").type("tester01") // input for username
      cy.get(":nth-child(2) > input").type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c") // input for passowrd
      cy.get(".btn").click()
      cy.get("h2").should("have.text", "Tester Hotel Overview") // verify page
      cy.get(".username").should("contain", "Welcome tester01!") // verify who is logged in
      cy.get(":nth-child(4) > .btn").click() // clicks reservation button
      cy.wait(500)
       cy.get("h2 > div").should("contain", "Reservation") // verify page
  
  })
 })*/