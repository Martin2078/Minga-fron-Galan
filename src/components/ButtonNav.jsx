import React from 'react'
import { Link } from 'react-router-dom'
const ButtonNav = (props) => {
  return (
    <Link to={props.to} className='text-center text-white' onClick={()=>{props.function()}}>{props.title}</Link>
  )
}
export default ButtonNav
