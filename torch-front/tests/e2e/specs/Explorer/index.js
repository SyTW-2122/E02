import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const { visit } = cy;

Given ('User is at the explorer page', () => {
  cy.visit('/explore');
})

When ('User look at the view', () => {
  cy.url().should('include', '/explore')
});

Then ('User should see the explorer layout as espected', () => {
  cy.get('#routines')
  cy.get('#User')
})