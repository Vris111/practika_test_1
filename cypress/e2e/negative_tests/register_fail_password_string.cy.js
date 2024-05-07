describe('template spec', () => {
    it('Register test failed 1 part all failed', () => {
        cy.fixture('newCypressTest').then(data => {
            cy.visit('https://dev.profteam.su/registration')

            cy.log('Ввод некорректного логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login)

            cy.log('Ввод некорректного email')
            cy.get('.form-input--email').type(data.email)

            cy.log('Ввод некорректного пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.none_existent_password_string)
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.password)
        })
    })
})