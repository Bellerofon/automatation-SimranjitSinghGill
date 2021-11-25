/// <reference types="cypress"/>

//Page elements
const createNewRoom = 'h2 > .btn'
const menuButtonRoom = ':nth-child(3) > .action'
const deleteRoom = '.menu > :nth-child(2)'
const roomHeader = ':nth-child(3) > :nth-child(2) > h3'


//Input fields
const pageContain = 'Rooms'
const categoryRoom = ':nth-child(1) > select'
const numberRoom = ':nth-child(2) > input'
const floorRoom = ':nth-child(3) > input'
const availableRoom = '.checkbox'
const priceRoom = ':nth-child(5) > input'
const featuresRoom = ':nth-child(6) > select'
const saveRoom = '.blue'

// Create new room

function roomCreate(cy, category, roomNr, floorNr, price, features){
    cy.contains(pageContain)
    cy.get(createNewRoom).click()
    cy.get(categoryRoom).select(category)
    cy.get(numberRoom).type(roomNr)
    cy.get(floorRoom).type(floorNr)
    cy.get(availableRoom).click()
    cy.get(priceRoom).type(price)
    cy.get(featuresRoom).select(features)
    cy.get(saveRoom).click()
    cy.get(roomHeader).contains('Floor ' + floorNr + ', ' + 'Room ' + roomNr)
}

//Delete Room
function roomDelete(cy, floorNr, roomNr) {
    cy.contains(pageContain)
    cy.get(roomHeader).contains('Floor ' + floorNr + ', ' + 'Room ' + roomNr)
    cy.get(menuButtonRoom).click()
    cy.get(deleteRoom).click()
    cy.contains('Floor ' + floorNr + ', ' + 'Room ' + roomNr).should('not.exist')
}

//Module Exports
module.exports = {
    roomCreate,
    roomDelete
}