import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const mymangas = createAsyncThunk('mymangas', async (token) => {
    try {
        let { data } = await axios.get("http://localhost:4000/mangas/me", {
            headers: {Authorization:'Bearer ' + token}
        })
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return {
            error
        }
    }
})

export default mymangas