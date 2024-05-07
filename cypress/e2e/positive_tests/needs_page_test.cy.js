describe('template spec', () => {
    it('Page connect', () => {
        cy.fixture('cypressTest').then(data =>{
            cy.visit('https://dev.profteam.su/login')

            cy.log('Ввод существующего логина')
            cy.get('.form-input--text').type(data.login)

            cy.log('Ввод пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке')
            cy.get('.form__buttons > :nth-child(3)').click()

            cy.wait(2000)

            cy.log('Клик по кнопке для перехода на потребности')
            cy.get(':nth-child(1) > .header__nav > [href="/needs"]').click()
            cy.wait(200)
        })
    })
})