import React from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div className='w-full h-full bg-[#EBEBEB] flex flex-col'>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout