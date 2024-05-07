describe('template spec', () => {
    it('Vacations search', () => {
        cy.fixture('cypressTest').then(data =>{
            cy.visit('https://dev.profteam.su/login')

            cy.log('Ввод существующего логина')
            cy.get('.form-input--text').type(data.login)

            cy.log('Ввод пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке')
            cy.get('.form__buttons > :nth-child(3)').click()

            cy.wait(2000)

            cy.log('Клик по кнопке для перехода на вакансии')
            cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]').click()

            cy.wait(2000)

            cy.log('Ввод данных для поиска')
            cy.get('.form-input--text').type(data.vac_search)

            cy.wait(200)

            cy.log('Клик по иконке поиска')
            cy.get('.button > .base-icon > svg').click()

            cy.wait(200)
        })
    })
})