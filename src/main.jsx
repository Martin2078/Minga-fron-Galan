import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import router from './router/router.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
    <GoogleOAuthProvider clientId="13291221652-pl3bt71a7fn2b88jsku0a0th0p7m3odn.apps.googleusercontent.com">
      <RouterProvider router={router}/>
    </GoogleOAuthProvider>
    </Provider>
  
)
