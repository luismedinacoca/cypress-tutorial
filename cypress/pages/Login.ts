class Login {
    private username: string = '#user-name';
    private password: string = '#password';
    private loginBtn: string = '#login-button';
    private errorMessage: string = '[data-test="error"]';

    get usernameElement(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.username);
    }
    
    get passwordElement(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.password);
    }
    
    get loginBtnElement(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.loginBtn);
    }
    
    get errorMessageElement(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.errorMessage);
    }

    submitLogin(username: string, password: string): void{
        cy.login(username, password);
    }

    visit(): void {
        cy.visit(`${Cypress.env('saucedemo')}`);
    }
}

export const LoginPage = new Login();