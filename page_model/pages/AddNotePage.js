import { Selector } from 'testcafe'

class AddNotePage {
    constructor () {
        this.noteTitle = Selector('input[name="note.title"]')
        this.noteDescription = Selector('textarea[name="note.description"]')
        this.addNoteButton = Selector('button[class="btn btn-lg btn-primary"]')
    }
}

export default new AddNotePage()