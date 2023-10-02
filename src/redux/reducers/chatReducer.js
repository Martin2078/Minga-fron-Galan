import { createReducer } from "@reduxjs/toolkit";
import { addMessage } from "../actions/chatbotMessageAction";
import { setMsg } from "../actions/chatbotMsg";

const initialState = {
    messages: [{ value: 'Hi, there! I\'m Mingabot :) How can I help you? Type "!help" to display my command list', id: 'bot' }],
    msg: ""
}

const chatReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(addMessage, (state, action) => {
            const newState = {
                ...state,
                messages: [...state.messages, action.payload]
            }
            return newState
        })
        .addCase(setMsg, (state, action) => {
            const newState = {
                ...state,
                msg: action.payload
            }
            return newState
        })
    )

export { chatReducer }