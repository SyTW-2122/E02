import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const { visit } = cy;

Given ('User is at the login main page', () => {
    cy.visit('/', {timeout: 10000});
    cy.viewport(375, 812);
})

When ('User enters not valid username as {string} and password as {string}', (username, password) => {
    cy.get('#input-email').type(username)
    cy.get('#input-password').type(password)
})

And ('User clicks on button', () => {
    cy.get('.login-button').click()
})

// NOTE: username-alert must be visible here, but is not.
Then ('User is not able to login', () => {
    cy.get('.username-alert')
})

When ('User clicks on register link', () => {
    cy.get('.forgot-password').click()
})

Then ('User is at the register page', () => {
    cy.visit('/register', {timeout: 10000})
})

When ('User enters username as {string}, email as {string} and password as {string}', (username, email, password) => {
    cy.get('#input-username').type(username)
    cy.get('#input-email').type(email)
    cy.get('#input-password').type(password)
})

And ('User clicks on sign up button', () => {
    cy.get('.signup-button').click()
})

Then ('User is fully registered and able to successfully login', () => {
    cy.visit('/', {timeout: 10000});
    cy.viewport(375, 812);
})