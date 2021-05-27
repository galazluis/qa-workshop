import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_PAGE: 'http://testapp.galenframework.com/'
}

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: 'testuser@example.com',
        PASSWORD: 'test123'
    },
    INVALID_USER:{
        USERNAME:'invaliduser@example.com',
        PASSWORD:'14321243'
    }
}

export const MESSAGES = {
    ERROR_MESSAGES:{
        INVALID_LOGIN: 'The username or password are incorrect'
    }
}