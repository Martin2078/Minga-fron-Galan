import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import router from './router/router.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Chatbot from './components/Chatbot.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
      <Chatbot/>
    </Provider>
  </React.StrictMode>,
)
