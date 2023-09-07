import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


const CrearCards =(props)=>{
   
    const{mangas} = props
    console.log(mangas)

    return mangas?.map(item=>{
      return(
        
          <div className='flex flex-col w-1/3 h-44 text-center'>
                <img src={item.cover_photo} alt="coverPhoto" className='object-cover w-full h-40' style={{borderRadius:"10px"}} /> 
                <p>{item.title} </p>
          </div>
        

      )
    })
    }
    const MangasAuthor =(props)=>{
   
      const{mangas} = props
      console.log(mangas)
  
      return (<>
      <div className='w-340 h-screen  flex flex-row gap-1 flex-wrap justify-center px-4  '>
        <CrearCards mangas={mangas}/>
        </div>
        </>
      )
        
        
      }
    
    
    
   

        
    


export default MangasAuthor;