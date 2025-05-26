import { LoginPage } from '../../pages/Login';

describe("Custom Commands", () => {
    beforeEach( () => {
        LoginPage.visit();
    })

    it('Locked out user scenario', () => {
        LoginPage.submitLogin('locked_out_user', 'secret_sauce');
        LoginPage.errorMessageElement.should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    })

    it('Problem user scenario', () => {
        LoginPage.submitLogin('problem_user', 'secret_sauce');
        cy.get('[data-test="title"]').should('be.visible');
    })

    it('Performance glitch user scenario', () => {
        LoginPage.submitLogin('performance_glitch_user', 'secret_sauce');
        cy.get('[data-test="title"]').should('be.visible');
    })

    it('Error user scenario', () => {
        LoginPage.submitLogin('error_user', 'secret_sauce');
        cy.get('[data-test="title"]').should('be.visible');
    })

    it('Visual user scenario', () => {
        LoginPage.submitLogin('visual_user', 'secret_sauce');
        cy.get('[data-test="title"]').should('be.visible');
    })


    it('Success Login Scenario', () => {
        LoginPage.submitLogin('standard_user', 'secret_sauce');
        cy.get('[data-test="title"]').should('be.visible');
    })
})

describe("", () => {
    it.only("Google", () => {
        cy.visit("https://www.google.com");
        cy.get('[name="q"]').type('Playwright by Testers Talk{enter}');
        
    })
})
