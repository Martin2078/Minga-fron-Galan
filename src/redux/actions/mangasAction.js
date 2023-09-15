import { createAction } from "@reduxjs/toolkit";

const filters = createAction("filters", ({checks, text}) => {
    return {
        payload: {
            checks,
            text,
        },
    }
})

export { filters };