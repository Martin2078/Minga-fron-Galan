import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


const CrearCards =(props)=>{
   
    const{mangas} = props
    return mangas?.map(item=>{
      return(
        
          <div className='flex flex-col w-1/3 h-1/3 text-center'>
                <img src={item.cover_photo} alt="coverPhoto" className='object-cover w-full h-4/5' style={{borderRadius:"10px"}} /> 
                <p>{item.title} </p>
          </div>
        

      )
    })
    }
    const MangasAuthor =(props)=>{
   
      const{mangas} = props
      console.log(mangas)
  
      return (<>
      <div className='w-screen h-96 flex flex-row gap-1 flex-wrap justify-center  mt-2 sm:h-screen sm:mt-1 sm:mb-15'>
        <CrearCards mangas={mangas}/>
        </div>
        </>
      )
        
        
      }
    
    
    
   

        
    


export default MangasAuthor;