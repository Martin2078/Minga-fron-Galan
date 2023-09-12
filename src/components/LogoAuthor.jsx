import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


const LogoAuthor =(props)=>{
    console.log(props.mangas.logo)
  
    const{mangas} = props
   
    return(
        <>
      <div className='w-full h-screen flex justify-center items-start mt-24'>
<Link to={"/"}><img src="../images/logo.png" alt=""  /></Link>
      </div>
        </>

        
    )

        
    
}

export default LogoAuthor;