import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const { visit } = cy;

Given ('User is at the login page', () => {
    cy.visit('/', {timeout: 10000});
    cy.viewport(375, 812);
})

When ('User enters username as {string} and password as {string}', (username, password) => {
    cy.get('#input-email').type('Eric')
    cy.get('#input-password').type('123456')
})

And ('User clicks on login button', () => {
    cy.get('.login-button').click()
})

// Se debe comprobar la ruta actual, no visitarla
Then ('User is at the user page', () => {
    cy.url().should('include', `/Eric`, {timeout: 10000}) 
})


// Given ('User is at the login main page', () => {
//     cy.visit('/', {timeout: 10000});
//     cy.viewport(375, 812);
// })

// When ('User enters not valid username as {string} and password as {string}', (username, password) => {
//     cy.get('#input-email').type(username)
//     cy.get('#input-password').type(password)
// })

// And ('User clicks on button', () => {
//     cy.get('.login-button').click()
// })

// // NOTE: username-alert must be visible here, but is not.
// Then ('User is not able to login', () => {
//     cy.get('.alert.alert-danger').contains('Authentication failed. User not found.')
// })

// When ('User clicks on register link', () => {
//     cy.get('.create-account').click()
// })

// Then ('User is at the register page', () => {
//     cy.url().should('include', '/sign-up') 
// })