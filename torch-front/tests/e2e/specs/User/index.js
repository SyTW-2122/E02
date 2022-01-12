import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const { visit } = cy;

Given ('I am logged in as "eric"', () => {
  cy.visit('/sign-in', {timeout: 10000});
  cy.viewport(375, 812);
  cy.get('#input-email').type('eric');
  cy.get('#input-password').type('123456');
  cy.get('.login-button').click();
});

When ('I look at the view', () => {
  cy.url().should('include', '/user')
});
Then ('I should see all the profile layout as espected', () => {
  // User settings button row
  cy.get('#User')
    .get('#settings-button')
  // User main info row
  cy.get('#User')
    .get('#profile-header')
    .contains('0')
  // User tools row
  cy.get('#User')
    .get('#tools-tab')
})
