describe('template spec', () => {
    it('Login test failed login', () => {
        cy.fixture('cypressTest').then(data =>{
            cy.visit('https://dev.profteam.su/login')

            cy.log('Ввод некорректного логина')
            cy.get('.form-input--text').type(data.none_existent_login)

            cy.log('Ввод  пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке')
            cy.get('.form__buttons > :nth-child(3)').click()
        })
    })
})