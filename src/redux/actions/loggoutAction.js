import { createAction } from "@reduxjs/toolkit";

const logout = createAction(
    'log_out',
    ()=>{return {
        payload: {}       
    }}
)

export default logout