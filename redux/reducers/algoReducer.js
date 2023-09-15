import { createReducer } from "@reduxjs/toolkit";
import { doSomeThing } from "../actions/algoAction";

initialState = {
    manga: {},
}

const algoReducer = createReducer(initialState, (builder) => 
    builder
        .addCase(doSomeThing, (state, action) => {
            console.log(action)
            console.log(action.payload)
            const nuevoEstado = {
                ...state,
                manga: { ...action.payload }
            }
            return nuevoEstado
        })
)

export default algoReducer