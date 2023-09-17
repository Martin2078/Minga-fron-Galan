import { createReducer } from "@reduxjs/toolkit"
import profile from '../actions/me_authors.js'
import logout from '../actions/loggoutAction.js'

const initialState = { user: {role:-1}, token:"" }

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
      .addCase(logout, (state,action)=>{
        return initialState
      })
  }
)

export default profile_Reducer