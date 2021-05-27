import landingPage from '../pages/LandingPage'
import loginPage from '../pages/LoginPage'
import myNotesPage from '../pages/MyNotesPage'
import addNotePage from '../pages/AddNotePage'
import { t } from 'testcafe'

fixture('My notes feature tests')
    .page(`http://testapp.galenframework.com/`)

test('User can add a note', async t => {
    await t
        .click(landingPage.loginButton)
        .typeText(loginPage.usernameField, "testuser@example.com", {paste:true})
        .typeText(loginPage.passwordField, "test123", {paste:true})
        .click(loginPage.loginButton)
        .click(myNotesPage.addNotoButton)
        .typeText(addNotePage.noteTitle,"This is a new note", {paste:true})
        .typeText(addNotePage.noteDescription, "This is a description", {paste:true})
        .click(addNotePage.addNoteButton)

        await t.expect(myNotesPage.noteItem.count).gte(2)
})