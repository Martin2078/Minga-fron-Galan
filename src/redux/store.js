import { configureStore } from '@reduxjs/toolkit'
import mangasReducer from './reducers/mangasReducer.js'

export const store = configureStore({
    reducer : {
        mangas : mangasReducer
    }
})
