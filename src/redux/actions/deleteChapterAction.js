import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const deleteChapterAction = createAsyncThunk("deletes chapter", async ({id, token}) => {
  try {
    const response = await axios.delete(
      `http://localhost:4000/chapters/${id}?manga_id=64f16659401f669668888fe1`,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export default deleteChapterAction;