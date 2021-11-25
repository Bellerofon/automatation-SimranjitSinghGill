/// <reference types="cypress"/>


// Elements
const titleDashboard = 'Testers Hotel'
const logoutbtn = '.user > .btn'
const roomView = ':nth-child(1) > .btn'
const clientView = '.blocks >:nth-child(2) > .btn'


//Check page title of Dashboard
function checkTitle(){
    cy.title().should('eq', titleDashboard)
}

//Perform logout
function performLogout(cy, confirmationContent) {
    cy.get(logoutbtn).click()
    cy.contains(confirmationContent)
}

//View Rooms
function viewRooms(){
    cy.get(roomView).click();
}

//View Clients
function viewClients(){
    cy.get(clientView).click();
}

//Module Exports
module.exports = {
    checkTitle,
    performLogout,
    viewRooms,
    viewClients
    
}
