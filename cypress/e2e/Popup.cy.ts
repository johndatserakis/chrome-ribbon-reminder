describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/src/popup/index.html');

    cy.get('div').contains('Ribbon Reminder');

    // cy.get('span').contains('Enable or Disable Ribbon Reminder');
    // cy.get('p').contains('Visited Links');
    // cy.get('p').contains('Default Links');

    // cy.get('span').contains('Adjust Link Color');
    // cy.get('p').contains('Visited Link Color');
    // cy.get('p').contains('Default Link Color');

    // cy.get('span').contains('Choose a List Type');
    // cy.get('span').contains('Blocklist');
    // cy.get('span').contains('Allowlist');

    // cy.get('span').contains('Advanced Options');
    // cy.get('span').contains('Add extra contrast to visited links.');

    // cy.get('span').contains('Blocklist');
    // cy.get('label').contains('Add URL to Blocklist');

    // cy.get('span').contains('Allowlist');
    // cy.get('label').contains('Add URL to Allowlist');

    // cy.get('span').contains('Additional Links');
    // cy.get('p').contains('View Ribbon Reminder in the Chrome Store.');
  });
});
