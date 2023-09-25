import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const editManga = createAsyncThunk('editManga', async (info) => {
    let { token, id, formData } = info
    try {
        const response = await axios.put(`http://localhost:4000/mangas/${id}`, {
                ...formData
            },{
                headers: {Authorization:'Bearer ' + token}
            })
            console.log('Manga edited:', response.data)
        return response.data
    } catch (error) {
        console.log(error.response.data)
        return { error: error.response.data }
    }
})

export default editManga