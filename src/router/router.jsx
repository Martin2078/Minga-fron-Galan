import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Index from '../pages/Index'
import Mangas from '../pages/Mangas'
import Layout from '../layouts/Layout'

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
                path:"/mangas",
                element: <Mangas/>,
            } ,
            {
                path:"/mangas/:page",
                element: <Mangas/>,
            },
            {
                path:"/mangas/:id",
                element: <Mangas/>,
            }
        ],
    },
])
 

export default router;
