describe('template spec', () => {
    it('Need create', () => {
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

            cy.log('Клик по кнопке для перехода на потребности')
            cy.get(':nth-child(6) > .menu-item__item-name').click()

            cy.wait(2000)

            cy.log('Клик по кнопке для перехода на создание потребности')
            cy.get('.needs-block__filters-wrapper > .button').click()

            cy.wait(2000)

            cy.log('Ввод данных')
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) >' +
                ' .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text').type(data.need_name)

            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1)' +
                ' > .form__labels > .labels > :nth-child(3) > .form-control > .form-area').type(data.need_needs)

            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1)' +
                ' > .form__labels > .labels > :nth-child(4) > .form-control > .form-area').type(data.need_que)

            cy.log('Создание потребности')
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons > .button').click()
        })
    })
})