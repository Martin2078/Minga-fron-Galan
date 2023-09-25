import { createReducer } from "@reduxjs/toolkit";
import editChapter from "../actions/editChapterAction.js";

const initialState = {
  chapters: [],
};

const chapterReducerEdit = createReducer(initialState, (builder) =>
  builder.addCase(editChapter.fulfilled, (state, action) => {

    return {
      ...state,
      chapters: state.chapters.map((chapter) =>
        chapter._id === action.payload._id ? action.payload : chapter
      ),
    };
  })
);

export default chapterReducerEdit;