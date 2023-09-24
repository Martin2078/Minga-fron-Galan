import { createReducer } from "@reduxjs/toolkit";
import mymangas from '../actions/myMangasAction'

const initialState = {
    mangas : [],
    error: null
}

const myMangasReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(mymangas.fulfilled, (state, action) => {
            console.log('actionReducer')
            console.log(action)
            const newState = {
                ...state,
            }
            if (action.payload.error) {
                newState.error = action.payload.error
                newState.mangas = initialState.mangas
            } else {
                newState.mangas = action.payload.response
                newState.error = null
            }

            return newState
        })
)

export default myMangasReducer