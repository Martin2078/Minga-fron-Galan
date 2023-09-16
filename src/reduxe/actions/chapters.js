import { createAction } from "@reduxjs/toolkit";

const chapter = createAction("chapters", ({number, title}) => {
    return {
        payload: {
            number,
            title,
        },
    }
})

export default chapter ;