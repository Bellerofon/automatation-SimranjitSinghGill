/// <reference types="cypress"/>

//Page elements
const createNewClient = 'h2 > .btn'
const menuButtonClient = ':nth-child(3) > .action'
const deleteClient = '.menu > :nth-child(2)'


//Input fields
const pageContain = 'Clients'
const nameClient = ':nth-child(1) > input'
const emailClient = ':nth-child(2) > input'
const phoneClient = ':nth-child(3) > input'
const saveClient = '.blue'

//Create a new Client
function clientCreate(cy, clientFirstName, clientLastName, clientEmail, clientphoneNr){
    cy.contains(pageContain)
    cy.get(createNewClient).click()
    cy.get(nameClient).type(clientFirstName + " " + clientLastName)
    cy.get(emailClient).type(clientEmail)
    cy.get(phoneClient).type(clientphoneNr)
    cy.get(saveClient).click()
}

//Delete Client
function clientDelete(cy,) {
    cy.contains(pageContain)
    cy.get(menuButtonClient).click()
    cy.get(deleteClient).click()
    
}

//Module Exports
module.exports = {
    clientCreate,
    clientDelete
}