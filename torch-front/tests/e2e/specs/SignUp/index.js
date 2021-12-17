import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const { visit } = cy;

Given ('User is at the sign up page', () => {
    cy.visit('/sign-up');
})

When ('User enters username as {string}, email as {string} and password as {string}', (username,email, password) => {
    cy.get('#input-username').type(username)
    cy.get('#input-email').type(email)
    cy.get('#input-password').type(password)
})

And ('User clicks on sign up button', () => {
    cy.get('.signup-button').click()
})

Then ('User is fully registered and able to successfully login', () => {
    cy.visit('/');
})
