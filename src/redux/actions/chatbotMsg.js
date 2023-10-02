import { createAction } from "@reduxjs/toolkit";

const setMsg = createAction("set msg", (msg) => {
    return {
        payload: msg
    }
})

export { setMsg }