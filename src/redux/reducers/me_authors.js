import { createReducer } from "@reduxjs/toolkit"
import profile from '../actions/me_authors.js'

const initialState = { user: {}, token:"" }

const inputReducer = createReducer(
  initialState,
  (builder) =>{ return builder
      .addCase(profile,(state,action)=>{
        console.log(action.payload);
        const newState={
          ...state,
          user: action.payload.findUser,
          token: action.payload.token
        }
        return newState
      })
  }
)

export default inputReducer