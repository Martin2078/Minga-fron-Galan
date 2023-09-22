import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const headers = ()=> {
    return {
  headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
    }
}
const createComment=createAsyncThunk('createComment',async(datos)=>
{
    try {
        let respuesta= await axios.post('http://localhost:4000/comments',datos,headers())
        respuesta=respuesta.data
        return {message: respuesta.message}
    } catch (error) {
        return {error: error.response.data.message}
    }
})

const readComments=createAsyncThunk('readComment',async(datos)=>
{
    try {
        let respuesta= await axios.get(`http://localhost:4000/comments?chapter_id=${datos.chapter_id}`)
        respuesta=respuesta.data
        return {comments: respuesta.response,
        message: respuesta.message}
    } catch (error) {
        return error
    }
})

const updateComments=createAsyncThunk('updateComments',async({datos,id})=>
{
    try {
        let respuesta= await axios.put(`http://localhost:4000/comments/${id}`,datos,headers())
        respuesta=respuesta.data
        return {comments: respuesta.response,
            message: respuesta.message}
    } catch (error) {
        return error
    }
})
const deleteComments=createAsyncThunk('deleteComments',async(datos)=>
{
    try {
        let respuesta= await axios.delete(`http://localhost:4000/comments/${datos}`,headers())
        respuesta=respuesta.data
        return {comments: respuesta.response,
            message: respuesta.message}
    } catch (error) {
        return error
    }
})

const inputActions={createComment,readComments,updateComments,deleteComments}
export default inputActions