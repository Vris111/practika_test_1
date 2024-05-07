describe('template spec', () => {
    it('Response by employer', () => {
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

            cy.log('Клик по кнопке для перехода на отклики')
            cy.get(':nth-child(5) > .menu-item__item-name').click()

            cy.wait(2000)

            cy.log('Клик по кнопке для перехода на отклик')
            cy.get('.infinite-loader > :nth-child(1) > .button').click()

            cy.wait(2000)

            cy.log('Ввод сообщения')
            cy.get('.form-area').type(data.response_data)

            cy.wait(200)

            cy.log('Отправка')
            cy.get('.comment-textarea__buttons > :nth-child(2)').click()

        })
    })
})