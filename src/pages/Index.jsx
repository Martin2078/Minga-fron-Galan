import Welcome from '../components/Welcome'
import React from 'react'
import Carrousel from '../components/Carrousel'

const Index = () => {
  return (
    <main className='flex flex-col lg:h-screen min-[320px]:h-full'>

        <Welcome/>
        <div className='w-full h-2/6 lg:flex items-center justify-center min-[320px]:hidden'>
          <Carrousel/>
        </div>

      </main>
  )
}

export default Index