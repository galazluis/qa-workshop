import { Selector } from 'testcafe'

class MyNotesPage {
    constructor () {
        this.pageTitle = Selector('h2')
        this.addNotoButton = Selector ('.btn-primary')
        this.noteItem = Selector('.list-group-item')
    }
}

export default new MyNotesPage