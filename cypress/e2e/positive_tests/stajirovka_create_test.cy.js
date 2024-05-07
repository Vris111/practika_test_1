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

            cy.log('Клик по кнопке для перехода на стажировки')
            cy.get(':nth-child(8) > .menu-item__item-name').click()

            cy.wait(2000)

            cy.log('Клик по кнопке для перехода на создание стажировки')
            cy.get('[data-v-e4f6348f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click()

            cy.wait(2000)

            cy.log('Ввод данных')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--').type(data.staj_name,{force:true})

            cy.log('Дата начала')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control--responsive > .form-input--date').type(data.start_date)
            cy.log('Дата окончания')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control--responsive > .form-input--date').type(data.end_date)

            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type(data.staj_needs,{force:true})

            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(7) > .form-control > .form-area').type(data.staj_que,{force:true})
            cy.log('Создание вакансии')
            cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button').click()
        })
    })
})