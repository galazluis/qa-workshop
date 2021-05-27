import landingPage from '../pages/LandingPage'
import loginPage from '../pages/LoginPage'
import myNotesPage from '../pages/MyNotesPage'
import { URLS, CREDENTIALS, MESSAGES } from '../data/Constants'

fixture('Login feature tests')
    .page(`${URLS.LOGIN_PAGE}`)
    .beforeEach(async t => {
        await t.click(landingPage.loginButton)
    })

test('User can log in using valid credentials', async t => {
        await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await t.expect(myNotesPage.pageTitle.innerText).contains('My Notes')
})

test.only('User can not log in using invalid credentials', async t => {
        await loginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
        await t.expect(loginPage.errorMessage.innerText).eql(MESSAGES.ERROR_MESSAGES.INVALID_LOGIN)

})

test('User can not log without credentials', async t => {
    await loginPage.submitLoginForm(null,null)
    await t.expect(loginPage.errorMessage.innerText).eql(MESSAGES.ERROR_MESSAGES.INVALID_LOGIN)
})