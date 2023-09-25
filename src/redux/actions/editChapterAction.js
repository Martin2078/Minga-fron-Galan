import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const editChapterAction = createAsyncThunk(
  "edits chapter",
  async ({ id, info, token }) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/chapters/${id}?manga_id=64f16659401f669668888fe1`,
        info,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );

      return response.data;
    } catch (error) {

      throw error;
    }
  }
);

export default editChapterAction;