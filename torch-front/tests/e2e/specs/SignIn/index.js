import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const { visit } = cy;

Given ('User is at the login page', () => {
    cy.visit('/', {timeout: 10000});
    cy.viewport(375, 812);
})

When ('User enters username as {string} and password as {string}', (username, password) => {
    cy.get('#input-email').type(username)
    cy.get('#input-password').type(password)
})

And ('User clicks on login button', () => {
    cy.get('.login-button').click()
})

Then ('User is able to login', () => {
    cy.visit('/user', {timeout: 10000});
})


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

Then ('User is not able to login', () => {
    cy.get('.alert')
})

When ('User clicks on register link', () => {
    cy.get('.forgot-password').click()
})

Then ('User is at the register page', () => {
    cy.visit('/register', {timeout: 10000})
})