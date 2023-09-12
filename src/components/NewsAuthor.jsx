import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import CardsNewOld from './CardsNewOld'


const NewsAuthor =(props)=>{
   const[on, setOn] = useState(false)
   const[showOlds, setShowOlds] =useState(false)
    const{mangas} = props
    console.log(mangas)
 
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
console.log("news")
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

console.log("entra aca?")

    return (
        <> 
        <div className='flex justify-center gap-4'>
        <span className="ml-3 text-sm font-medium">news</span>
        <label className="relative inline-flex items-center cursor-pointer">
        
        <input checked={on} type="checkbox" value="" className="sr-only peer"  onChange={handleToggle}/>
  
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium">olds</span>
        </label>
        </div>
        
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