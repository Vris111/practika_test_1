describe('template spec', () => {
    it('Add student role', () => {
        cy.fixture('cypressTest').then(data =>{
            cy.visit('https://dev.profteam.su/login')
            cy.log('Ввод существующего логина')
            cy.get('.form-input--text').type(data.login)
            cy.get('.form-input--password').type(data.password)
            cy.log('Клик по кнопке')
            cy.get(':nth-child(3) > .button').click()

            cy.wait(200)

            cy.log('Клик по кнопке для получения роли')
            cy.get('.page-nav__role-block > .button').click()

            cy.wait(50)

            cy.log('Выбор роли студента по клику на карточку')
            cy.get('.select-role-form > :nth-child(3)').click()
        })
    })
})