import { createAction } from "@reduxjs/toolkit";

const saveManga = createAction("saveOneManga", (manga) => {
    return {
        payload: manga
    }
})

export { saveManga }