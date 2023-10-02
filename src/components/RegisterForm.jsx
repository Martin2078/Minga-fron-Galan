import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from 'react';
import { GoogleLogin } from '@react-oauth/google';

const RegisterForm =(props) =>{
    
    const {handleCreate, handleLogin, handleFailure} = props
    const[data, setData] = useState({
        "email" : "",
        "photo": "",
        "password": ""
    })
   const email=useRef()
   const photo=useRef()
   const password=useRef()

    const handleChange=() =>{
        let emailData= email.current.value;
        let photoData = photo.current.value;
        let passwordData = password.current.value;

        setData({"email" : emailData,
        "photo": photoData,
        "password": passwordData

        })
    }
    
    return (
    <form className="w-2/3  flex flex-col" action="">
    <fieldset className="border-solid border-2 border-black rounded-xl">
        <legend className="text-xs">Email</legend>
        <input  ref={email} className="w-full h-5 rounded-xl " onChange={handleChange} type="email" />
    </fieldset>
    <fieldset className="border-solid border-2 border-black rounded-xl">
        <legend className="text-xs">Photo</legend>
        <input ref={photo} className="w-full h-5 rounded-xl" type="url" onChange={handleChange} />
    </fieldset>
    <fieldset className="border-solid border-2 border-black rounded-xl">
        <legend className="text-xs">Password</legend>
        <input ref={password} className="w-full h-5 rounded-xl" type="password" onChange={handleChange}/>
    </fieldset>
    <div>
        <label className="text-xs" htmlFor="">
            <input  type="checkbox" />Send notification to my email
        </label>
    </div>
     <input onClick={(e)=>handleCreate(e, data)} className="h-8 bg-blue-700 rounded-xl mt-3" type="submit" value="SingUp"/>
     <GoogleLogin
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
              ></GoogleLogin>
  <div className="text-center flex flex-col gap-3 mt-3 text-xs">
    <p>Already have an account? <Link className="text-blue-700" to={"/signIn"}>Sign In</Link> </p>
    <p>Go back to <Link className="text-blue-700" to={"/"}>home page</Link> </p>
  </div>
  
  
  </form>
  )


}

export default RegisterForm