import { createAction } from "@reduxjs/toolkit";


export const setChapterData = (number, title) => ({
    type: 'SET_CHAPTER_DATA',
    payload: { number, title },
});