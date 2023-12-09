// cypress/integration/home_page_spec.js

describe('HomePage', () => {
    it('displays the expected content', () => {
      cy.visit('http://localhost:3000'); // Replace with your app's URL
  
      // Check if certain elements or text are present on the page
      cy.contains('HOMEPAGE!!').should('exist');
      cy.contains('Stay on track').should('exist');
      cy.contains('Alerts').should('exist');
      cy.contains('Results').should('exist');
      cy.contains('Free').should('exist');
    });
  
    // Add more tests for interactions, navigation, etc. as needed
  });
  