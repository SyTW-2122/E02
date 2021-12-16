import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const { visit } = cy;

Given ('User is at the login page', () => {
    cy.visit('/', {timeout: 10000});
})

When ('User enters username as {string} and password as {string}', (username, password) => {
    cy.get('#input-email').type(username)
    cy.get('#input-password').type(password)
})

And ('User clicks on login button', () => {
    cy.get('#btnLogin').click()
})

Then ('User is able to succesfully login', () => {
    cy.get('#welcome').should('be.visible', {timeout: 10000})
})