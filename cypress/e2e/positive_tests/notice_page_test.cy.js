describe('template spec', () => {
    it('Notice test', () => {
        cy.fixture('cypressTest').then(data =>{
            cy.visit('https://dev.profteam.su/login')

            cy.log('Ввод логина')
            cy.get('.form-input--text').type(data.login)

            cy.log('Ввод пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке')
            cy.get('.form__buttons > :nth-child(3)').click()

            cy.wait(2000)

            cy.log('Клик по иконке "Колокольчик"')
            cy.get('.header-container__desktop > .notification-bell > .notification-bell__icon__desktop > svg').click()

            cy.wait(2000)

            cy.log('Клик по кнопке "Прочитать все"')
            cy.get('.header-container__desktop > .notification-bell > .notification-bell__similar > .notifications-similar > .notifications-similar__header > .link').click()
            cy.wait(2000)
        })
    })
})