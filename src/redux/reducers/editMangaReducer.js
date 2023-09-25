import { createReducer } from "@reduxjs/toolkit";
import editManga from "../actions/editMangaAction";

const initialState = {
    error: null
}

const editMangaReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(editManga.fulfilled, (state, action) => {
            const newState = {
                ...state
            }
            if (action.payload.error) {
                newState.error = action.payload.error
            } else {
                newState.error = null
            }
            return newState
        })
)

export default editMangaReducer