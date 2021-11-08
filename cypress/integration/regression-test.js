/// <reference types="cypress"/>

import * as loginFuncs from '../pages/IndexPages'
import * as dashboardFuncs from '../pages/dashboardPage'

// This is a test suit

describe('Regression test suit', function(){
    beforeEach( ()=>{
        cy.visit('http://localhost:3000')
        loginFuncs.checkLogingPageTitle(cy)

    })

    // This is a test case
    it('Perform valid login', function(){
        loginFuncs.performValidLogin(cy,'tester01' ,'GteteqbQQgSr88SwNExUQv2ydb7xuf8c' ,'Tester Hotel Overview')
        dashboardFuncs.performLogout(cy,'Login')
    })
})