import flecha from '../../public/images/arrow-right.svg'
import React from 'react'

const Arrow = ({props}) => {
  return (
    <button className='border-solid bg-[#999] rounded-full p-2'>
      <img className={`${props} text-[#333333] w-6 `} src={flecha} alt="" />
      </button>
  )
}

export default Arrow