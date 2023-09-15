import { createAction } from "@reduxjs/toolkit";

const profile = createAction(
    'save_user',
    (user)=>{return {
        payload: user       
    }}
)

export default profile