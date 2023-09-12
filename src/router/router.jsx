import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Index from '../pages/Index'
import Mangas from '../pages/Mangas'
import Layout from '../layouts/Layout'
import Page from '../pages/Page'
import Profile from '../pages/Profile'
import ChapterForm from '../pages/Chapter-form'

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

            },
            {
                path:"/mangas/:page",
                element: <Mangas/>,
            },
            {
                path:"/chapter/:id/:page",
                element: <Page/>,
            },{
                path:"/mangas/:id",
                element: <Mangas/>,
            }, 
            {
                path:"/Me",
                element: <Profile/>,
            },
            {
                path:"/:manga_id/chapter-form",
                element: <ChapterForm/>
            }
        ],
    },
])
 

export default router;
