describe('template spec', () => {
    it('Register test failed 2 part', () => {
        cy.fixture('newCypressTest').then(data => {
            cy.visit('https://dev.profteam.su/registration')

            cy.log('Ввод некорректного логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login)

            cy.log('Ввод корректного email')
            cy.get('.form-input--email').type(data.email)

            cy.log('Ввод некорректного пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password)
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.password)

            cy.log('Клик по кнопке')
            cy.get(':nth-child(4) > .button').click()

            cy.log('Ввод некорректной фамилия')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.none_existent_name_symbols)

            cy.log('Ввод некорректного имя')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.none_existent_surname_symbols)

            cy.log('Ввод некорректного отчества ')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type(data.none_existent_patronymic_symbols)
        })
    })
})