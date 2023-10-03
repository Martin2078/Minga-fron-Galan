import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from 'react';

const RegisterForm =(props) =>{
    

    const {handleCreate} = props
    const[data, setData] = useState({
        "email" : "",
        "photo": null,
        "password": ""
    })

   const email=useRef()
   const photo=useRef()
   const password=useRef()

    function setPhoto(e) {
        setData({...data,photo:e.target.files[0]})
    }
    const setFile=(e)=>{
        e.preventDefault()
        const formData=new FormData();
        formData.append('file',data.photo)
        formData.append('email',data.email)
        formData.append('password',data.password)
        handleCreate(e,formData)
    }

    const handleChange=() =>async(e)=>{
        let emailData= email.current.value;
        let photoData
        if (window.innerWidth<1024) {
            photoData=photo.current.value
        }else{
            photoData=data.photo
        }
        let passwordData = password.current.value;

        setData({...data,"email" : emailData,
        "photo":photoData,
        "password": passwordData
        })
    }

    return (
    <form className="w-2/3 gap-1 flex flex-col" action="">
    <fieldset className="border-solid border-2 border-black rounded-xl">
        <legend className="text-xs">Email</legend>
        <input  ref={email} className="w-full h-5 rounded-xl " onChange={handleChange()} type="email" />
    </fieldset>
    {window.innerWidth<1024 ?(<fieldset className="border-solid border-2 border-black rounded-xl">
        <legend className="text-xs">Photo</legend>
        <input ref={photo} className="w-full h-5 rounded-xl" type="url" placeholder="Insert URL" onChange={handleChange()} />
    </fieldset>): (<div className="">
        <legend className="text-xs">Photo</legend>
        <input className="w-full h-fit" type="file" onChange={(e)=>setPhoto(e)} />
    </div>)
    }
    <fieldset className="border-solid border-2 border-black rounded-xl">
        <legend className="text-xs">Password</legend>
        <input ref={password} className="w-full h-5 rounded-xl" type="password" onChange={handleChange()}/>
    </fieldset>
    <div>
        <label className="text-xs" htmlFor="">
            <input  type="checkbox" />Send notification to my email
        </label>
    </div>
    {window.innerWidth<1024 ? (<input onClick={(e)=>handleCreate(e,data)} className="h-8 bg-blue-700 rounded-xl mt-3 cursor-pointer" type="submit" value="SingUp"/>
):(     <input onClick={(e)=>setFile(e)} className="h-8 bg-blue-700 rounded-xl mt-3 cursor-pointer" type="submit" value="SingUp"/>
)}
     <button  className="flex justify-center mt-3 gap-3 rounded-xl bg-slate-50 items-center h-8"><img src="../images/Google.png" alt="" /><p>Sign up with Google</p></button>
  <div className="text-center flex flex-col gap-3 mt-3 text-xs">
    <p>Already have an account? <Link className="text-blue-700" to={"/signIn"}>Sign In</Link> </p>
    <p>Go back to <Link className="text-blue-700" to={"/"}>home page</Link> </p>
  </div>
  
  
  </form>
  )


}

export default RegisterForm