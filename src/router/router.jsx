import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Index from '../pages/Index'
import Mangas from '../pages/Mangas'
import Layout from '../layouts/Layout'
import Page from '../pages/Page'

const router=createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                path:"/",
                element: <Index/>,
            },
            {
                path:"/Mangas",
                element: <Mangas/>,
            },
            {
                path:"/chapter/:id/:page",
                element: <Page/>,
            }
        ],
    },
])
 

export default router;
