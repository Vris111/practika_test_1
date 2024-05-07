describe('template spec', () => {
    it('Login test', () => {
        cy.fixture('cypressTest').then(data =>{
            cy.visit('https://dev.profteam.su/login')

            cy.log('Ввод существующего логина')
            cy.get('.form-input--text').type(data.login)

            cy.log('Ввод пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке')
            cy.get('.form__buttons > :nth-child(3)').click()
        })
    })
})