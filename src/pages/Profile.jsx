import React from 'react'
import User from './User'
import axios from 'axios'
import { useState } from 'react'
import Author from './Author'
import { useEffect } from 'react'

const Profile = () => {

const[hasAuthor, setHasAuthor] = useState(false)
const [usuario, setUsuario] = useState({})
const [author, setAuthor] = useState("")

useEffect(()=>{
 
  getUser()

  
},[])
let handleHasAuthor=(data)=>{

  if(data.userHasAuthor){
    setHasAuthor(true)
  }else{
    setHasAuthor(false)
  }
}
let getUser = () => {
  axios("http://localhost:4000/authors/64f1645c46d9719d0b8048e3")
   .then(res=> {
    
    let data = res.data.response.profile
    
    setUsuario(data)
    
    
    handleHasAuthor(data)
   }
    )
   .catch(error=>console.log(error)) 
}






  return (
    <>
    
    {hasAuthor? <Author 
    user = {usuario}
    
    /> : <User
    user = {usuario }
    />}

        
      

    </>
  )
}

export default Profile