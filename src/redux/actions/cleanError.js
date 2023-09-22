import { createAction } from "@reduxjs/toolkit";

const cleanError = createAction(
    'clean',
    ()=>{return {
        payload:{}        
    }}
)

export default cleanError