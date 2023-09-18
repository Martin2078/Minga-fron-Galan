import axios from 'axios'
import React, { useRef, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import profile from '../redux/actions/me_authors.js'
import Alert from '../components/Alert.jsx'
function signIn() {

const mail = useRef()
const contrasenia = useRef()
const [icon,setIcon]=useState("../../images/oculto.png")
const [value,setValue]=useState("")
const [mostrar,setMostrar]=useState("password")
const [show,setShow]=useState(false)
const dispatch = useDispatch()
const navigate=useNavigate()
let errorData
let errorMessage
async function sendData() {
const objeto={
  email: mail.current.value,
  password: contrasenia.current.value
}
try {
  let respuesta= await axios.post('http://localhost:4000/auth/signin',objeto)
  dispatch(profile(respuesta.data.response))
  navigate("/")
  
} catch (error) {
  errorMessage=error.response.data.message
  errorData=error.response.data 
  setShow(true)
}

}

function showOrNot() {
  if (mostrar==="password") {
    setMostrar("text")
    return mostrar
  }else if(mostrar==="text"){
    setMostrar("password")
    return mostrar
  }
}
function ocultoVer() {
  if (mostrar==="password") {
    setIcon("../../images/ver.png")
    return icon
  }else if(mostrar==="text"){
    setIcon("../../images/oculto.png")
    return icon
  }
}

  return (
    <div className='w-full h-full flex'>
      <img className='w-3/6 h-screen lg:block min-[320px]:hidden' src="../../images/backgroudn-signIn.png" alt="" />
      <div className='flex justify-center items-center bg-white lg:w-3/6 min-[320px]:w-full h-screen'>
        <div className='lg:w-4/6 min-[320px]:w-full h-4/6 flex flex-col gap-6'>
          <div className='flex flex-col items-center gap-2'>
            <img src="../../images/logo-junto.svg" alt="" />
            <h1 className='text-4xl font-semibold flex'>Welcome <p className=' ml-3 text-[#4338CA]'>back</p>!</h1>
            <p className='text-center lg:w-9/12 min-[320px]:w-10/12 text-xs'>Discover manga, manhua and manhwa, track your progress, have fun, read manga. </p>
          </div>
          <div className='flex flex-col items-center justify-center gap-5'>
            <div className='w-5/6'>
              <p className='text-[#4338CA] text-xs ml-4 translate-y-2 inline-block bg-white'>Email</p>
              <div className='flex justify-between items-center pr-2 border border-[#999] rounded-xl bg-white'>
                <input className='w-full h-10 rounded-xl px-4 py-1 focus:outline-none ' ref={mail} type="email"/>
                <p className='text-[#4338CA] text-base'>@</p>
              </div>
            </div>
            <div className='w-5/6'>
              <p className='text-[#4338CA] text-xs ml-4 translate-y-2 inline-block bg-white'>Password</p>
              <div className='flex justify-between pr-2 items-center border border-[#999] rounded-xl bg-white'>
              <input className='w-full h-10 rounded-xl px-4 py-1 focus:outline-none ' onInput={(e)=>{setValue(e.target.value)}} ref={contrasenia} type={mostrar} value={value} />
              <img src={icon} onClick={()=>{showOrNot();ocultoVer()}} className='text-[#4338CA] text-base cursor-pointer w-4 h-3 object-cover' alt="" />
              </div>
            </div>
              {show ?(<Alert show={show} setShow={setShow} message={errorMessage} data={errorData} />):(null)}
            <button className='flex items-center justify-center w-5/6 h-11 rounded-xl px-2 py-2 bg-[#4338CA] text-white text-base' onClick={()=>sendData()}>Sign In</button>
            <button className='w-5/6 h-11 rounded-xl px-2 py-2 flex justify-center border border-[#999]'>
              <img src="../../images/Google.png" alt="" /><p className='text-[#666] pl-3'>Sign in with Google</p>
            </button>
            <p>you don't have an account yet? <Link to={""} className='text-[#4338CA] font-semibold'>Sign Up</Link>
            </p>
            <p>Go back to <Link to={"/"} className='text-[#4338CA] font-semibold'>home Page</Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default signIn