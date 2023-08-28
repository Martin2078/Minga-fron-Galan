import ButtonWelcome from './ButtonWelcome'
import React from 'react'

const Welcome = () => {
  return (
    <div className="w-full bg-cover align-middle flex justify-center items-center lg:bg-[url('../public/images/background.png')] lg:h-4/6 lg:bg-center min-[320px]:bg-[url('../public/images/imagen-mobile.png')] min-[320px]:h-screen">
          <div className='w-fit h-4/6 text-center lg:gap-y-3 min-[320px]:gap-y-8 flex flex-col justify-center items-center' >
            <h1 className='lg:text-5xl	text-white font-["Roboto"] lg:block min-[320px]:hidden font-bold'>Your favorite comic book store ✨</h1>
            <h1 className='lg:hidden md:block	text-white font-["Roboto"] sm:text-5xl md:text-6xl min-[320px]:text-4xl min-[320px]:w-5/6 font-bold'>Your favorite comic book store</h1>
            <p className='lg:text-2xl text-white w-4/6 font-["Roboto"] lg:block min-[320px]:hidden'>Explore our catalog to live the adventure of <br /> your life</p>
            <p className='min-[320px]:text-sm sm:text-xl lg:hidden min-[320px]:block text-white min-[320px]:w-4/6 md:w-3/6 font-["Roboto"]'>From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</p>
            <ButtonWelcome/>
          </div>
    </div>
  )
}

export default Welcome