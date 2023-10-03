import axios from 'axios'
import React, { useRef, useState , useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import profile from '../redux/actions/me_authors.js'
import Alert from '../components/Alert.jsx'
import { GoogleLogin } from '@react-oauth/google';
import Swal from 'sweetalert2';
function signIn() {

const mail = useRef()
const contrasenia = useRef()
const [icon,setIcon]=useState("../../images/oculto.png")
const [value,setValue]=useState("")
const [mostrar,setMostrar]=useState("password")
const [show,setShow]=useState(false)
const dispatch = useDispatch()
const navigate=useNavigate()
const [message, setMessage] = useState([]);
const [dataResponse, setDataResponse] = useState(null);
const handleFailure = (result) => {
  console.log(result);
};
const handleLogin = async (googleData) => {
  console.log(googleData)
  const data = {
    token: googleData.credential,
  };

  try {
    console.log(data)
    const res = await axios.post('http://localhost:4000/auth/google-signin', data);
    let token = res.data.response;
    console.log(res.data.response)
    dispatch(profile(res.data.response))
    navigate("/");

    if (res.data.response.user.created) {
      // Mostrar una alerta de registro exitoso si el usuario se acaba de crear
      Swal.fire({
        icon: 'success',
        title: 'Registrado con éxito',
        text: '¡Tu cuenta ha sido creada y has iniciado sesión con éxito!',
      });
    } else {
      // Mostrar una alerta de inicio de sesión exitoso si el usuario ya existía
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión correcto',
        text: '¡Has iniciado sesión con éxito!',
      });
    }
  } catch (error) {
      console.log(error);
    setShow(!show);
    //setAlert([error.response.data.message]);
    console.log(error);

    // Mostrar una alerta de error
    Swal.fire({
      icon: 'error',
      title: 'Error al iniciar sesión con Google',
      text: 'Ha ocurrido un error al iniciar sesión con Google.',
    });
  }
   }
async function sendData() {
const objeto={
  email: mail.current.value,
  password: contrasenia.current.value
}
try {
  let respuesta= await axios.post('http://localhost:4000/auth/signin',objeto)
  console.log(respuesta.data.response)
  dispatch(profile(respuesta.data.response))
  navigate("/")
} catch (error) {
  console.log(error);
  setMessage(error.response.data.message)
  setDataResponse(error.response.data)
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
useEffect(() => {
  if (dataResponse || message.length > 0) {
    setShow(true);
  }
}, [dataResponse, message]);
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
            {show ?(<Alert show={show} setShow={setShow} message={message}/>):(null)}
            <button className='flex items-center justify-center w-5/6 h-11 rounded-xl px-2 py-2 bg-[#4338CA] text-white text-base' onClick={()=>sendData()}>Sign In</button>
            <GoogleLogin
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
              ></GoogleLogin>
            <p>you don't have an account yet? <Link to={"/signUp"} className='text-[#4338CA] font-semibold'>Sign Up</Link>
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