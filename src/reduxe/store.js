import { configureStore } from '@reduxjs/toolkit'

import chapterReducer from './actions/reducers/chapters.js'
export const store = configureStore({
    reducer : {
        chapterReducer
    }
})
export default store