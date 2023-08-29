import flecha from '../../public/images/arrow-right.svg'
import React from 'react'

const Arrow = ({props,func}) => {
  return (
    <button className='border-solid bg-[#999] rounded-full p-2' onClick={func}>
      <img className={`${props} text-[#333333] w-3 `} src={flecha} alt="" />
      </button>
  )
}

export default Arrow