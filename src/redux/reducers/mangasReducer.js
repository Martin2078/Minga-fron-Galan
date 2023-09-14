import { createReducer } from "@reduxjs/toolkit";
import { filters } from "../actions/mangasAction.js";

const initialState = {
    check: [],
    text: ""
}

const mangasReducer = createReducer(initialState, (builder) => builder
    .addCase(filters, (state, action) => {
        console.log(action)
        console.log (action.payload)

        const nuevoEstado = {
            ...state,
        }

        if (action.payload.checks) {
            nuevoEstado.check = action.payload.checks;
        }
        if (action.payload.text != null && action.payload.text != undefined) {
            nuevoEstado.text = action.payload.text;
        }

        return nuevoEstado;
    })
    
)
export default mangasReducer;