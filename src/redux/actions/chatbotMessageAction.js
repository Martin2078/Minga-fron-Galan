import { createAction } from "@reduxjs/toolkit";

const addMessage = createAction("add message", (message) => {
    return {
        payload: message
    }
})

export { addMessage }