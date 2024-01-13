import web from '../../support/web-data'

describe('BugBank', () => {
    beforeEach(() => {
        cy.visit(web.url);
        cy.dataInput(web.userRegistered, "data input 1", "504-1", web.password);
        cy.dataInput(web.userToTransfer, "data input  2", "505-1", web.password);
    });

    it('Register successfully', () => {
        cy.registerAccount(web.email1, web.name1, web.password);
        cy.successRegister();
    });

    it('Validate transfer between accounts', () => {
        const valueTranfer = 200;
        cy.login(web.userRegistered, web.password);
        cy.transferAccount(web.userToTransfer, web.userRegistered, valueTranfer);
        cy.successTransfer();
        cy.validateAmount(web.userToTransfer, web.userRegistered, valueTranfer);
    });

    it('Logout of the account', () => {
        cy.login(web.userRegistered, web.password);
        cy.logout();
        cy.successLogout();
    });
})