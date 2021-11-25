/// <reference types="cypress"/>


// Element pages
import * as loginFuncs from '../pages/IndexPages'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomFuncs from '../pages/RoomPage'
import * as clientFuncs from '../pages/ClientPage' 

// Randomize array for inputs
const roomCategory = ['Double', 'Single', 'Twin']
const roomFeatures = ['Balcony', 'Ensuite', 'Sea View', 'Penthouse']
const randomCategory = Math.floor(Math.random() * roomCategory.length);
const randomFeatures = Math.floor(Math.random() * roomFeatures.length);

// fake  data
import faker from 'faker'
// fake data for roompage
let floorNr = faker.datatype.number()
let roomNr = faker.datatype.number()
let priceNr = faker.datatype.number()
//fake data for clientpage
let firstName = faker.name.firstName()
let lastName = faker.name.lastName()
let email = faker.internet.email()
let phoneNr = faker.phone.phoneNumber()



// This is a test suit

// Preform a login and at the end of test a logout
describe('Regression test suit', function(){
    beforeEach( ()=>{
        cy.visit('http://localhost:3000')
        loginFuncs.checkLogingPageTitle(cy)
        loginFuncs.performValidLogin(cy,'tester01' ,'GteteqbQQgSr88SwNExUQv2ydb7xuf8c' ,'Tester Hotel Overview')
        
    })

    afterEach(() => {
        dashboardFuncs.performLogout(cy,'Login')
    })

     //Create Room
     it('Create room', function(){
        dashboardFuncs.viewRooms()
        roomFuncs.roomCreate(cy, roomCategory[randomCategory], roomNr, floorNr, priceNr, roomFeatures[randomFeatures])
    })
    
    //Delete Room
    it('Delete Room', function(){
        dashboardFuncs.viewRooms()
        roomFuncs.roomDelete(cy, floorNr, roomNr)
    })

    //Create Client
    it('Create Client', function(){
        dashboardFuncs.viewClients()
        clientFuncs.clientCreate(cy, firstName, lastName, email, phoneNr)
    })

    //Delete a Client
    it('Delete Client', function(){
        dashboardFuncs.viewClients()
        clientFuncs.clientDelete(cy, phoneNr)
    })

})

