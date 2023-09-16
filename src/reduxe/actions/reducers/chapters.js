import { createReducer } from "@reduxjs/toolkit";
import  chapter  from "../chapters"; 

const initialState = {
    number: null,
    title: ""
}

const chapterReducer = createReducer (initialState, (builder) => builder
    .addCase(chapter, (state, action) => {
       

        const nuevoEstado = {
            ...state,
            number: action.payload.number,
            title: action.payload.title
        }

       

        return nuevoEstado;
    })
    
)
export default chapterReducer;


