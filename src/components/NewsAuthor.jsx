import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import CardsNewOld from './CardsNewOld'


const NewsAuthor =(props)=>{
   const[on, setOn] = useState(false)
   const[showOlds, setShowOlds] =useState(false)
    const{mangas} = props
  
    useEffect(()=>{
      
          showCards()
      },[on])
    
const handleToggle=()=>{
    if(on){
        setOn(false)
    }else{
        setOn(true)
        showCards()
    }
    
    
    
}
const showCards = () =>{
    console.log(on)
    if(on){
        setShowOlds(true)
        
        
    } else{
        setShowOlds(false)
        console.log(showOlds)
    }
    console.log(showOlds)
}



    return (
        <>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
        <label className="relative inline-flex items-center cursor-pointer">
        
        <input checked={on} type="checkbox" value="" className="sr-only peer"  onChange={handleToggle}/>
  
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
        </label>
        
        {showOlds?<CardsNewOld 
        mangas={mangas.old}
        /> 
        :  
        <CardsNewOld 
        mangas={mangas.new}
        />}
    
    
        </>

        
    )

        
    
}

export default NewsAuthor;