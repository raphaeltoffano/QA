// cypress/e2e/computer-database.ts
import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
beforeEach(() => {
  cy.visit('/');
});

//Scenario: Visit the computer's homepage and check the elements present on the page
When("I visit the home page", () => {
  // cy.visit('/') is not necessary here, as it is executed in the Before() hook.
});

Then("I should see the main elements on the page", () => {
  cy.get('.topbar').find('h1').should('have.text', 'Computer database');
  cy.get('#main > h1').should('exist')
  cy.get('#searchbox').should('have.attr', 'placeholder', 'Filter by computer name...')
  cy.get('#searchsubmit').should('exist').and('have.attr', 'value', 'Filter by name');
  cy.get('#add').should('have.attr','href','/computers/new').and('have.text','Add a new computer')
  cy.get('.computers.zebra-striped').should('exist');
    const columnNames = ['Computer name', 'Introduced', 'Discontinued', 'Company'];
    columnNames.forEach((columnName, index) => {
    cy.get('.computers.zebra-striped')
    .find('thead th')
    .eq(index)
    .should('contain', columnName);
  })
  cy.get('#pagination')
  .should('exist');

  cy.get('#pagination .prev.disabled').should('contain', '← Previous');
  cy.get('#pagination .current').should('contain', 'Displaying 1 to 10 of');
  cy.get('#pagination .next a')
  .should('have.attr', 'href', '/computers?p=1')
  .and('contain', 'Next →');
});

//Scenario: Verify search functionality
When("I perform a valid search", () => {
  cy.get('#searchbox').type('ASCI Blue Pacific{enter}')
});

Then("I should see the matching search results", () => {
  cy.get('tbody > tr > :nth-child(1) > a').should('have.text','ASCI Blue Pacific')
});

//Scenario: Invalid search query
When("I perform an invalid search", () => {
  cy.get('#searchbox').type('nothing,nothing{enter}')
});

Then("I should see no search results", () => {
  cy.get('.well').should('have.text','Nothing to display')
});

//Scenario: Add a computer
When("I fill in the required fields and submit the form", () => {
  const computerName: string = 'nokia-brazil';
  const introduced: string = '2018-10-10';
  const discontinued: string = '2025-10-10';

  cy.get('#add').click();
  cy.get('#main > h1').contains('Add a computer');
  cy.get('#name').type(computerName);
  cy.get('#introduced').type(introduced);
  cy.get('#discontinued').type(discontinued);
  cy.get('#company').select('Nokia');
  cy.get('.primary').click();
});

Then("the computer should be added successfully", () => {
  cy.get('.alert-message').should('have.text','Done !  Computer nokia-brazil has been created');
});

//Scenario: Attempt to add a computer without filling in required fields
When("I attempt to submit the form without filling in the required fields", () => {
  cy.get('#add').click();
  cy.get('#main > h1').contains('Add a computer');
  cy.get('.primary').click();
});

Then("I should see an error message indicating the required fields", () => {
  cy.get('.error > .input > .help-inline').should('have.text','Failed to refine type : Predicate isEmpty() did not fail.');
});






