import React, {useState} from 'react'
import logo from '../images/logo.png';
import menu from '../images/menu.png';
import Display from '../components/Display'
import {Link as Button} from 'react-router-dom'
const NavBar = () => {
  let [open, setOpen] = useState(false)

  return (
    <>
      <nav className='flex w-full h-1/6 align-start justify-between px-10 absolute top-0 left-0'>
        <button onClick={()=>setOpen(!open)}><img className='h-2/6' src={menu} alt="menu" /></button>
        <Button to="/" className='flex items-center'><img className='h-2/6' src={logo} alt="logo" /></Button>
      </nav>
      {open && <Display open={open} setOpen={setOpen}/> }
    </>


  )
}

export default NavBar
