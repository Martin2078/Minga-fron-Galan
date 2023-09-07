import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Arrow from './Arrow'

const Carrousel = () => {
  const [count,setCount]=useState(0)
  const [categories,setCategories]=useState([])


  useEffect(()=>{
    axios("http://localhost:4000/categories")
     .then(res=> setCategories(res.data.response))
     .catch(error=>console.log(error))  
}, [])
 
let next =() => (count!==categories.length-1) ? setCount(count + 1) : setCount(0);
  
let prev =()=> (count!==0) ?  setCount(count-1) : setCount(categories.length-1);



  return (
    <div className='flex bg-[#4338CA] w-11/12 h-4/6 rounded justify-between items-center px-10'>
            <Arrow props="rotate-180" func={prev}/>
            <div className='flex gap-x-24 items-center h-full'>
              <img className='h-44 absolute left-36 bottom-10' src={categories[count]?.character_photo } alt="" />
              <img className='h-40 absolute left-1/3 bottom-12' src={categories[count]?.cover_photo} alt="" />

            <div className='w-1/4 text-justify absolute right-60'>
              <h2 className='text-2xl text-[#FFFFFF] font-sans["Roboto"]'>{categories[count]?.name}</h2>
              <p className='text-min-[320px] text-[#FFFFFF] font-["Roboto"] font leading-4'>{categories[count]?.description}</p>
            </div>

            </div>
          <Arrow props="" func={next}/>  
  </div>
  )
}

export default Carrousel