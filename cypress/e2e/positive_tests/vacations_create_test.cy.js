describe('template spec', () => {
    it('Vacation create', () => {
        cy.fixture('cypressCreatesTest').then(data =>{
            cy.visit('https://dev.profteam.su/login')
            cy.viewport(1200, 750)
            cy.log('Ввод существующего логина')
            cy.get('.form-input--text').type(data.login_Employer)

            cy.log('Ввод пароля')
            cy.get('.form-input--password').type(data.password_Employer)
            cy.log('Клик по кнопке')
            cy.get(':nth-child(3) > .button').click()

            cy.wait(2000)

            cy.log('Клик по кнопке для перехода на вакансии')
            cy.get(':nth-child(7) > .menu-item__item-name').click()

            cy.wait(2000)

            cy.log('Клик по кнопке для перехода на создание вакансии')
            cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click()

            cy.wait(2000)

            cy.log('Ввод данных')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--').type(data.vacation_name,{force:true})

            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area').type(data.vacation_needs,{force:true})

            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type(data.vacation_que,{force:true})
            cy.log('Создание вакансии')
            cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button').click()
        })
    })
})