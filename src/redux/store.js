import { configureStore } from "@reduxjs/toolkit";
import { mangaReducer } from "./reducers/mangaReducer.js";
import profile_Reducer from './reducers/me_authors.js'
import mangas_news from './reducers/mangas_news.js'
import { mangasReducer } from './reducers/mangasReducer.js'
import chapterReducer from "./reducers/chapterReducer.js";
import { chatReducer } from "./reducers/chatReducer.js";


export const store = configureStore({
    reducer: {
        mangaReducer,
        chapter: chapterReducer,
        mangas : mangasReducer,
        profile: profile_Reducer,
        mangas_news,
        chatReducer
    }
})