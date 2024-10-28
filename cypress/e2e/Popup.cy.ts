describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/src/popup/index.html');

    cy.get('div').contains('Ribbon Reminder');
    cy.get('p').contains('Ribbons');

    cy.get('span').contains('Additional Links');
    cy.get('p').contains('View Ribbon Reminder in the Chrome Store.');
    cy.get('p').contains('Powered by music. Made in Boston.');
  });
});
