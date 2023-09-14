import { configureStore } from "@reduxjs/toolkit";
import { mangaReducer } from "./reducers/mangaReducer.js";

export const store = configureStore({
    reducer: {
        mangaReducer
    }
})