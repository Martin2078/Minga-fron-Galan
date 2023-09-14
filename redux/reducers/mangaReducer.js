import { createReducer } from "@reduxjs/toolkit";
import { saveManga } from "../actions/mangaAction";

const initialState = {
    manga: []
}

const mangaReducer = createReducer(initialState, (builder) => 
    builder
        .addCase(saveManga, (state, action) => {
            console.log(action)
            console.log(action.payload)
            const nuevoEstado = {
                ...state,
                manga: { ...action.payload}
            }
            return nuevoEstado
        })
)

export { mangaReducer }