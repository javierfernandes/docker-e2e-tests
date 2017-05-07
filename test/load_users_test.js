
Feature('Users List');

Scenario('Loads fine', (I) => {
  I.amOnPage('/')
  I.see('E2E testing with Docker')
  I.waitForText('Socrates')
});