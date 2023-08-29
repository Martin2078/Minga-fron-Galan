import React from 'react'
import cruz from '../../public/images/cruz.png'
const Display = ({open,setOpen}) => {
  return (
    <>
    <div className='bg-white lg:w-1/4 min-[320px]:w-full h-screen fixed top-0 z-10 flex flex-col p-5 shadow-[0_0_20px_-5px] shadow-[#4338CA] gap-5'>
      <button className='text-white flex justify-end' onClick={()=>setOpen(!open)}>
        <img className='w-8 p-2' src={cruz} alt=""/> 
      </button>
      <div className='text-white flex flex-col gap-5 p-5 border-b-2'>
        <button className='bg-[#4338CA] flex justify-center py-2 px-3 rounded-full'>Home</button>
        <button className='bg-[#4338CA] flex justify-center py-2 px-3 rounded-full'>Mangas</button>
      </div>
      <div className=' text-white border-b-2 flex flex-col items-center px-3 pt-2 pb-4 gap-4'>
        <p className='text-black font-bold'>Join Us</p>
        <button></button>
        <div className='flex gap-6'>
        <button className='bg-[#4338CA] py-2 px-4 rounded-full'>Log In</button>
        <button className='bg-[#4338CA] py-2 px-3 rounded-full'>Sign Up</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default Display