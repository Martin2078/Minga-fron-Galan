import { configureStore } from '@reduxjs/toolkit'
import me_authorsReducer from './reducers/me_authors.js'
import mangas_news from './reducers/mangas_news.js'
import mangasReducer from './reducers/mangasReducer.js'

export const store = configureStore({
    reducer : {
        mangas : mangasReducer,
        profile: me_authorsReducer,
        mangas_news
    }
})