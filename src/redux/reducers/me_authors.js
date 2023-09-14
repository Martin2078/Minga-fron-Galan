import { createReducer } from "@reduxjs/toolkit"
import profile from '../actions/me_authors.js'

const initialState = { user: {}, token:"" }

const profile_Reducer = createReducer(
  initialState,
  (builder) =>{ return builder
      .addCase(profile,(state,action)=>{
        const newState={
          ...state,
          user: action.payload.findUser,
          token: action.payload.token
        }
        return newState
      })
  }
)

export default profile_Reducer