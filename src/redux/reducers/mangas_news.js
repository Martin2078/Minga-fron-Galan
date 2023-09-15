import { createReducer } from "@reduxjs/toolkit"
import mangas_news_action from '../actions/me_authors.js'

const initialState = {mangas: {}}

const inputReducer = createReducer(
  initialState,
  (builder) =>{ return builder
      .addCase(mangas_news_action,(state,action)=>{
        const newState={
          ...state,
            mangas: action.payload.mangas
        }
        return newState
      })
  }
)

export default inputReducer