import { Selector, t } from 'testcafe'

class LoginPage {
    constructor () {
        this.usernameField = Selector('[name="login.username"]')
        this.passwordField = Selector('[name="login.password"]')
        this.loginButton = Selector('.btn').withText('Login')
        this.errorMessage = Selector('#login-error-message')
    }

    async submitLoginForm(username, password){

        if (username != null) {
            await t.typeText(this.usernameField, username, {paste:true})
        }
        if (password != null) {
            await t.typeText(this.passwordField, password, {paste:true})
        }
        await t.click(this.loginButton)
    }
}

export default new LoginPage() 