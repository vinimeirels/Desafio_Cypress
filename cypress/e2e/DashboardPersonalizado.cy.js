const { dashboardpara, dashboard } = require("../support/page_objetcts/DashboardPersonalizadoPage")

describe('Validar Dashboard Personalizado', () => {
    beforeEach('Acessar e logar o site Biome Quality', () => {

        dashboardpara.acessaSite();
        dashboardpara.aceitaCookes();
        dashboardpara.preencheCampoUsuario();
        dashboardpara.preencheCampoSenha();
        dashboardpara.clicaBotaoEntrar();

    })
    it('Validação que ao selecionar a opção personalizado será apresentado a página Dashboard Personalizado', () => {

        cy.wait(2000)
        dashboardpara.clicarSetaDashboard();
        cy.wait(2000)
        dashboardpara.clicarPersonalizado();

    })

    it('Validação que ao clicar no botão Adicionar Gráfico será apresentado um modal para adicionar gráfico', () => {

        dashboardpara.clicarSetaDashboard();
        dashboardpara.clicarPersonalizado();
        cy.wait(5000)
        dashboardpara.fechaModal();
        dashboardpara.clicarAdicionarGrafico();
        cy.wait(5000)
        dashboardpara.validaModalAdicionarGrafico();

    })
})


