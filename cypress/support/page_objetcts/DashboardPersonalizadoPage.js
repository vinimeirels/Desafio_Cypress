export class dashboard {

    acessaSite() {
        cy.visit('https://qa1-frontend-biomequality-husrbtcmsa-ue.a.run.app/')

    }

    aceitaCookes() {
        cy.get('[data-cy="accept-cookies"] > .bq-theme > .mat-focus-indicator > .mat-button-wrapper').click()

    }

    preencheCampoUsuario() {
        cy.get('[data-cy="username"]').type(Cypress.env('usuario'))


    }

    preencheCampoSenha() {
        cy.get('[data-cy="password"]').type(Cypress.env('senha'))
    }

    clicaBotaoEntrar() {
        cy.get('[data-cy="login-submit"] > .bq-theme > .mat-focus-indicator > .mat-button-wrapper').click()

    }

    clicarSetaDashboard() {
        cy.get(':nth-child(1) > div.ng-star-inserted > .mat-list-item-avatar > .mat-list-item-content > .text-white').click()

    }

    clicarPersonalizado() {
        cy.get(':nth-child(1) > div.ng-star-inserted > .submenu > :nth-child(2) > .mat-list-item-content > .mat-list-text > .mat-tooltip-trigger').click()
    }

    clicarAdicionarGrafico() {
        cy.get('[data-cy="add-custom-chart"] > .bq-theme > .mat-focus-indicator > .mat-button-wrapper').click()
        
    }

    validaModalAdicionarGrafico() {

        cy.get('.dialog-form__title').contains('Adicionar Gráfico').should('be.visible')
    }

    fechaModal() {

        cy.get('button.shepherd-cancel-icon').click({ force: true })

    }

}
export const dashboardpara = new dashboard()