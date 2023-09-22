import cleanError from "../actions/cleanError";
import inputActions from "../actions/commentsActions";
import { createReducer } from "@reduxjs/toolkit"
const createComments=inputActions.createComment
const readComments=inputActions.readComments
const updateComments=inputActions.updateComments
const deleteComments=inputActions.deleteComments

let initialState = {
    comments:{},
    loading:false,
    message: null,
    error: null
}

const commentsReducer = createReducer(initialState, (builder) => 
    builder
        .addCase(cleanError, ()=> {
            return initialState
        })
        .addCase(createComments.fulfilled, (state, action) => {
            let nuevoEstado = {
                ...state,
            }
            if (action.payload.error) {
                nuevoEstado.error=action.payload.error
                return nuevoEstado
            }
           nuevoEstado.message=action.payload.message
            return nuevoEstado
        })
        .addCase(createComments.pending, (state, action) => {
            let nuevoEstado = {
                ...state,
                loading:true
            }
            return nuevoEstado
        })
        .addCase(createComments.rejected, (state, action) => {
            let nuevoEstado = {
                ...state,
                loading: false,
            }
            return nuevoEstado
        })


        .addCase(readComments.fulfilled, (state, action) => {
            let nuevoEstado = {
                ...state,
                comments: action.payload.comments.allComments,
                loading:false,
                maxPages: action.payload.comments.amountPages

            }
            return nuevoEstado
        })
        .addCase(readComments.pending, (state) => {
            let nuevoEstado = {
                ...state,
                loading:true
            }
            return nuevoEstado
        })


        .addCase(updateComments.fulfilled, (state, action) => {
            console.log(action);
            let nuevoEstado = {
                ...state,
                comments: action.payload.response,
                message: action.payload.message,
                loading:false
            }
            return nuevoEstado
        })
        .addCase(updateComments.pending, (state, action) => {
            console.log(action);
            let nuevoEstado = {
                ...state,
                loading:true
            }
            return nuevoEstado
        })
        .addCase(updateComments.rejected, (state, action) => {
            console.log(action);
            let nuevoEstado = {
                ...state,
                loading:false,
                message:action.error
            }
            return nuevoEstado
        })


        .addCase(deleteComments.fulfilled, (state, action) => {
            console.log(action.payload.message);
            let nuevoEstado = {
                ...state,
                loading:false,
                message: action.payload.message
            }
            return nuevoEstado
        })
        .addCase(deleteComments.pending, (state) => {
            let nuevoEstado = {
                ...state,
                loading:true
            }
            return nuevoEstado
        })
        .addCase(deleteComments.rejected, (state) => {
            let nuevoEstado = {
                ...state,
                loading:false
            }
            return nuevoEstado
        })
)

export default commentsReducer 