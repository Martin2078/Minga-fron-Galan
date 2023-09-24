import { createReducer } from "@reduxjs/toolkit";
import deleteManga from "../actions/deleteMangaAction";

const initialState = {
    loading: false,
    error: null
}

const deleteMangaReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(deleteManga.fulfilled, (state, action) => {
            const newState = {
                ...state,
                loading: false
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

export default deleteMangaReducer