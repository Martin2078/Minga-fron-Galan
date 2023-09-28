import { createReducer } from "@reduxjs/toolkit";
import donate from '../actions/donateAction'

const initialState = {
    data: {},
    error: null
}

const donateReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(donate.fulfilled, (state, action) => {
            const newState = {
                ...state
            }
            if (action.payload.error) {
                newState.error = action.payload.error
                newState.data = initialState.data
            } else {
                newState.data = action.payload
                newState.error = null
                console.log(newState)
            }
            return newState
        })
)

export default donateReducer