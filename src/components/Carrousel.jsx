import imagen1 from '../../public/images/imagen1.png'
import imagen2 from '../../public/images/imagen2.png'
import React from 'react'
import Arrow from './Arrow'

const Carrousel = () => {
  return (
    <div className='flex bg-[#4338CA] w-11/12 h-4/6 rounded justify-between items-center px-10'>
            <Arrow props="rotate-180"/>
            <div className='flex gap-x-24 items-center h-full'>
              <img className='h-56 -translate-y-5' src={imagen1} alt="imagen-deku" />
              <img className='h-52 -translate-y-8' src={imagen2} alt="imagen-myHeroAcademy" />

            <div className='w-2/6 text-justify'>
              <h2 className='text-2xl text-[#FFFFFF] font-sans["Roboto"]  '>Shonen:</h2>
              <p className='text-min-[320px] text-[#FFFFFF] font-["Roboto"] font leading-3'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
            </div>

            </div>
          <Arrow props=""/>  
  </div>
  )
}

export default Carrousel