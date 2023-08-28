import React from 'react'
import logo from '../../public/images/logo.png';
import menu from '../../public/images/menu.png';

const NavBar = () => {
  return (
      <nav className='flex w-full h-1/6 align-start justify-between px-10 absolute top-0 left-0'>
        <button ><img className='h-2/6' src={menu} alt="menu" /></button>
        <button><img className='h-2/6' src={logo} alt="logo" /></button>
      </nav>
  )
}

export default NavBar
