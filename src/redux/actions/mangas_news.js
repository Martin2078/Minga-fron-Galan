import { createAction } from "@reduxjs/toolkit";

const mangas_news = createAction(
    'save_mangas_news',
    (mangas)=>{return {
        payload: mangas       
    }}
)

export default mangas_news