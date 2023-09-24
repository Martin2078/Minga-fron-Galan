import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Perfil from '../components/Perfil'
import MangasAuthor from '../components/MangasAuthor'
import LogoAuthor from '../components/LogoAuthor'
import NewsAuthor from '../components/NewsAuthor'


const Author =(props)=>{
    const [mangas, setMangas] = useState([])
    const [tipo, setTipo] = useState("")
    const{user} = props
   
    useEffect(()=>{
        getMangas()
           
      },[])
      
let getMangas=()=>{
    axios(`http://localhost:4000/mangas/news/${user.authorUser_id}`)
   .then(res=> {
    console.log(res)
    let data = res.data.respuesta.response.all
    
    setMangas(data)
    funcion(data)
    
    
   
   }
    )
   .catch(error=>console.log(error)) 
}
const funcion = (data)=>{
    if(mangas){
    if(data.all){
        
        setTipo("all")
    }else{
        
        setTipo("news")
    }
}
}
console.log(mangas)


    return(
        <>
        <Perfil
        user={user}
        />
        
        <MangasAuthor mangas={mangas} />
        
        </>

        
    )

        
    
}

export default Author;