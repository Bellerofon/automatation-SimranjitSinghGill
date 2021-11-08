/// <reference types="cypress"/>

// Elements

const loginPageTitle = 'Testers Hotel'
const usernameTextField = 'nth-child(1) > input'
const passwordTextField = 'nth-child(2) > input'
const submitBtn = '.btn'
const formLabel = 'Login'

// Actions

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

