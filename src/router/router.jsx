import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Index from '../pages/Index'
import Mangas from '../pages/Mangas'
import Layout from '../layouts/Layout'
import Page from '../pages/Page'
import Profile from '../pages/Profile'
import MangaDetail from '../components/MangaDetail'
import MangaForm from '../pages/MangaForm'

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
                path:"/mangas/:id",
                element: <MangaDetail/>
            },
            {
                path:"/mangas/:page",
                element: <Mangas/>,
            },
            {
                path:"/chapters",
                element: <MangaDetail/>
            },
            {
                path:"/chapter/:id/:page",
                element: <Page/>,
            },
            {
                path:"/mangas/:id",
                element: <Mangas/>,
            }, 
            {
                path:"/Me",
                element: <Profile/>,
            },
            {
                path:"/manga-form",
                loader: async () => {
                    const userRole = getUserRole()
                    if (userRole === 0) {
                        return <MangaForm />;
                    } else {
                        
                    }
                } 
            }
        ],
    },
])
 

export default router;
