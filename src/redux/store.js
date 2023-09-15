import { configureStore } from '@reduxjs/toolkit'
import me_authorsReducer from './reducers/me_authors.js'
import mangas_news from './reducers/mangas_news.js'
const store = configureStore({
    reducer : {
        profile: me_authorsReducer,
        mangas_news,
    }
})
export default store