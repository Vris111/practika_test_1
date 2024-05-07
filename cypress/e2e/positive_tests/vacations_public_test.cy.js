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

            cy.log('Клик по кнопке публикации')
            cy.get(':nth-child(2) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper >' +
                ' .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green').click()


        })
    })
})