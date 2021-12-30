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
    .get('b-row#settings-button')
    .get('font-awesome-icon')
  // User main info row
  cy.get('#User')
    .get('b-row#main-info')
    .get('b-col#routines')
    .get('b-row#number')
    .contains('0')
  cy.get('#User')
    .get('b-row#main-info')
    .get('b-col#followers')
    .get('b-row#number')
    .contains('0')
  cy.get('#User')
    .get('b-row#main-info')
    .get('b-col#following')
    .get('b-row#number')
    .contains('0')
  cy.get('#User')
    .get('b-row#main-info')
    .get('b-col#profile')
    .get('b-row#picture')
  // User options buttons row
  cy.get('#User')
    .get('b-row#options')
    .get('b-col#edit')
  cy.get('#User')
    .get('b-row#options')
    .get('b-col#stats')
  // User tools row
  cy.get('#User')
    .get('b-row#tools-tab')
    .get('b-col>b-tabs')
})
