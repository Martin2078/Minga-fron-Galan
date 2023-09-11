import imagenFooter from '/images/footer.png'
import logoFooter from '/images/logo-footer.png'
import logoFooter2 from '/images/logo-footer2.png'
import React from 'react'
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <footer className='h-auto min-[320px]:top-full '>
          <img className='w-full h-72 object-center lg:block min-[320px]:hidden' src={imagenFooter} alt="" />

          <div className='flex lg:h-24  justify-center lg:bg-white min-[320px]:bg-gray-600 min-[320px]:h-fit'>
            <div className='lg:w-10/12 h-fit flex lg:justify-between lg:items-end lg:flex-row min-[320px]:py-5 min-[320px]:px-12 min-[320px]:flex-col min-[320px]:w-full min-[320px]:justify-center min-[320px]:items-center min-[320px]:gap-6'>
            <div className='flex font-bold lg:gap-32 lg:flex-row lg:text-min-[320px] lg:text-black min-[320px]:flex-col min-[320px]:gap-2 min-[320px]:text-xl min-[320px]:text-center min-[320px]:text-white'>
              <Link to="/">Home</Link>
              <Link to="/Mangas">Mangas</Link>
            </div>

            <div className='flex'>
              <img className='lg:h-9 lg:bg-transparent min-[320px]:h-12 min-[320px]:bg-white' src={logoFooter} alt="" />
              <img className='lg:h-9 lg:bg-transparent min-[320px]:h-12 min-[320px]:bg-white' src={logoFooter2} alt="" />
            </div>

            <div className='flex flex-col items-center gap-5'>
              <div className='flex justify-between items-center w-5/6'>
                <a href=""><img src="../images/facebook-black.svg" alt="" /></a>
                <a href=""><img src="../images/twitter-black.svg" alt="" /></a>
                <a href=""><img src="../images/vimeo-black.svg" alt="" /></a>
                <a href=""><img src="../images/youtube-black.svg" alt="" /></a>
              </div>
              <button className=' flex w-5/6 gap-1 justify-center items-center px-20 py-1 bg-gradient-to-r from-[#4338CA] to-[#5E52F3] rounded-3xl text-white'>Donate<img className='h-3' src="../images/Union.png" alt="" /></button>
            </div>
            </div>
          </div>
      </footer>
  )
}

export default footer