import { LoginPage } from '../../pages/Login';


describe("Page Object Model", () => {
    beforeEach( () => {
        //cy.visit(`${Cypress.env('saucedemo')}`);
        LoginPage.visit();
    })

    it('Locked out user scenario', () => {
        LoginPage.usernameElement.type('locked_out_user')
        LoginPage.passwordElement.type('secret_sauce')
        LoginPage.loginBtnElement.click();
        LoginPage.errorMessageElement.should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    })

    it('Problem user scenario', () => {
        LoginPage.usernameElement.type('problem_user')
        LoginPage.passwordElement.type('secret_sauce')
        LoginPage.loginBtnElement.click();
        cy.get('[data-test="title"]').should('be.visible');
    })

    it('Performance glitch user scenario', () => {
        LoginPage.usernameElement.type('performance_glitch_user')
        LoginPage.passwordElement.type('secret_sauce')
        LoginPage.loginBtnElement.click();
        cy.get('[data-test="title"]').should('be.visible');
    })

    it('Error user scenario', () => {
        LoginPage.usernameElement.type('error_user')
        LoginPage.passwordElement.type('secret_sauce')
        LoginPage.loginBtnElement.click();
        cy.get('[data-test="title"]').should('be.visible');
    })

    it('Visual user scenario', () => {
        LoginPage.usernameElement.type('visual_user')
        LoginPage.passwordElement.type('secret_sauce')
        LoginPage.loginBtnElement.click();
        cy.get('[data-test="title"]').should('be.visible');
    })


    it('Success Login Scenario', () => {
        LoginPage.submitLogin('standard_user', 'secret_sauce');
        cy.get('[data-test="title"]').should('be.visible');
    })
})
