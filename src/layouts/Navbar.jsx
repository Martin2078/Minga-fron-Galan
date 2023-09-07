import React, {useState} from 'react'
import logo from '../../public/images/logo.png';
import menu from '../../public/images/menu.png';
import Display from '../components/Display'
import {Link as Button} from 'react-router-dom'
const NavBar = () => {
  let [open, setOpen] = useState(false)

  return (
    <>
      <nav className='flex w-full lg:h-1/6 min-[320px]:h-10 min-[320px]:items-center min-[320px]:pt-5 lg:pt-8 lg:items-start justify-between min-[320px]:px-4 lg:px-10 absolute top-0 left-0'>
        <button onClick={()=>setOpen(!open)}><img className='min-[320px]:h-12 lg:h-1/6' src={menu} alt="menu" /></button>
        <Button to="/"><img className='min-[320px]:h-8 lg:h-1/6' src={logo} alt="logo" /></Button>
      </nav>
      {open && <Display open={open} setOpen={setOpen}/> }
    </>


  )
}

export default NavBar
