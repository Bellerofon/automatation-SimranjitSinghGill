/// <reference types="cypress"/>

const logoutBtn = '.user > .btn'

function performLogout(cy, confirmationContent){
    cy.get(logoutBtn).click()
    cy.contains(confirmationContent)
}

module.exports = {
    performLogout
}
