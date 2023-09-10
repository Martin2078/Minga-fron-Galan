import React from 'react'

const PageHeader = ({number, title}) => {
  return (
    <div className='w-full h-1/6 bg-indigo-700 text-center flex flex-col justify-center items-center'>
        <p className='text-white text-xs'>Cap. n° {number} </p>
        <p className='text-white text-xs'>{title}</p>
    </div>
  )
}

export default PageHeader