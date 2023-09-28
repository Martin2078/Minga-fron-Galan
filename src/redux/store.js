import { configureStore } from "@reduxjs/toolkit";
import { mangaReducer } from "./reducers/mangaReducer.js";
import profile_Reducer from './reducers/me_authors.js'
import mangas_news from './reducers/mangas_news.js'
import { mangasReducer } from './reducers/mangasReducer.js'
import myMangasReducer from './reducers/myMangasReducer.js'
import getCategoriesReducer from "./reducers/getCategoriesReducer.js";
import editMangaReducer from "./reducers/editMangaReducer.js";
import donateReducer from "./reducers/donateReducer.js";

export const store = configureStore({
    reducer: {
        mangaReducer,
        mangas : mangasReducer,
        profile: profile_Reducer,
        mangas_news,
        myMangas: myMangasReducer,
        categories: getCategoriesReducer,
        editMangaReducer,
        donate: donateReducer
    }
})