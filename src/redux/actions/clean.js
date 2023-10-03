import { createAction } from "@reduxjs/toolkit";

const clean = createAction(
    'clean',
    ()=>{return {
        payload:{}        
    }}
)

export default clean