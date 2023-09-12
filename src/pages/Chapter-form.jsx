import React from 'react'

const ChapterForm = () => {
  return (
    <div className='h-screen bg-slate-100 flex flex-col justify-center items-center'>
        <form action="" className='flex flex-col h-2/3 w-2/3 items-center'>
            <label htmlFor="" className='text-2xl pb-5'>New Chapter</label>
            <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2' placeholder='  Insert title' />
            <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2' placeholder='  Insert order' />
            <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2' placeholder='  Insert pages' />
            <button className='bg-indigo-700 text-white font-semibold py-2 px-5 mt-20 rounded-full w-full md:w-1/2'>Send</button>
        </form>
        
    </div>
  )
}

export default ChapterForm
