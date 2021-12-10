import {Given, Then} from 'cypress-cucumber-preprocessor/steps';
const { visit } = cy;

Given("I'm in te user page", () => {
  cy.visit('/user');
});

Then("I should see the user content", () => {
  cy.get('.user').should('exist');
  cy.get('.user').get('h1').contains('This is the user profile page');
});
