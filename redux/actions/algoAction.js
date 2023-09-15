import { createAction } from "@reduxjs/toolkit";

const doSomeThing = createAction("doSomething", (info) => {
    return {
        payload: info
    }
})

export { doSomeThing }