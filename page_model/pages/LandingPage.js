import { Selector } from 'testcafe'

class LandingPage {
    constructor () {
        this.loginButton = Selector('#welcome-page button[class="btn btn-lg btn-primary button-login"]')
    }
}

export default new LandingPage()