import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Index from '../pages/Index'
import Mangas from '../pages/Mangas'
import Layout from '../layouts/Layout'
import Page from '../pages/Page'
import Profile from '../pages/Profile'
import ChapterForm from '../pages/Chapter-form'
import SignIn from '../pages/signIn'
import MangaDetail from '../components/MangaDetail'
import MangaForm from '../pages/MangaForm'

import SignUp from '../pages/SignUp'
import NotAllow from '../components/NotAllow'
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
                path:"/signIn",
                element: <SignIn/>
            },
            {
                path:"/mangas/:id",
                element: <MangaDetail/>
            },
            {
                path:"/chapter/:id/:page",
                element: <Page/>,
            }, 
            {
                path:"/Me",
                element: <Profile/>,
            },
            {
                path:"/manga-form",
                element: <MangaForm/>,
            },
            {
                path:"/:manga_id/chapter-form",
                element: <ChapterForm/>
            }, 
            {
                path:"/signUp",
                element: <SignUp/>,
            },
            {
                path:"/notAllow",
                element: <NotAllow/>,
            }
        ],
    },
])
 

export default router;
