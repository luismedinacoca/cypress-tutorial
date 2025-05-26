import { User } from './model';
import { LoginPage } from '../../../cypress/pages/Login';

describe("Using Fixture data", () => {
  it("Getting user information based on my Fixture", () => {
    cy.fixture<{users: User[]}>('credentials')
    .its('users')
    .then((users) => {
      users.forEach(user => {
          LoginPage.visit();
          cy.log(user.username);
          LoginPage.usernameElement.type(user.username);
          cy.log(user.password);
          LoginPage.passwordElement.type(user.password);
          LoginPage.loginBtnElement.click();
          cy.log(user.errorMessage);
          LoginPage.errorMessageElement.should('have.text', user.errorMessage);
          cy.clearCookies();
          cy.clearLocalStorage();
        })
      })
  });
});
