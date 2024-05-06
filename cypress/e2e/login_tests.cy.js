describe('template spec', () => {
    it('Page connect', () => {
        cy.visit('https://dev.profteam.su/login')
    })
    it('Login test', () => {
        cy.fixture('cypressTest').then(data =>{
            cy.visit('https://dev.profteam.su/login')
            cy.log('Ввод несуществующего логина')
            cy.get('.form-input--text').type(data.login)
            cy.get('.form-input--password').type(data.password)
            cy.log('Клик по кнопке')
            cy.get('.form__buttons > :nth-child(3)').click()
        })
    })
    it('Login test failed', () => {
        cy.fixture('cypressTest').then(data =>{
            cy.visit('https://dev.profteam.su/login')
            cy.log('Ввод некорректного логина')
            cy.get('.form-input--text').type(data.none_existent_login)
            cy.get('.form-input--password').type(data.none_existent_password)
            cy.log('Клик по кнопке')
            cy.get('.form__buttons > :nth-child(3)').click()
        })
    })
})