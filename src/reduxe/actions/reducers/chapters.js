import { createReducer } from "@reduxjs/toolkit";
import { chapter } from "../chapters"; 

const initialState = {
    check: [],
    text: ""
}

const chapterReducer = chapterReducer (initialState, (builder) => builder
    .addCase(chapter, (state, action) => {
        console.log(action)
        console.log (action.payload)

        const nuevoEstado = {
            ...state,
        }

       

        return nuevoEstado;
    })
    
)
export default mangasReducer;
mangaAction

