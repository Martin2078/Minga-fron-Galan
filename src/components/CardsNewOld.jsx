import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


const Cards =(data)=>{
    const {mangas} = data;
    let cards = mangas?.map(row =>{
        return(
            <div>
                
            </div>
        )
    })
    return cards
}

const CardsNewOld =(props)=>{
   console.log(props)
    return(
        
        <Cards  data={props}/>

        
    )

        
    
}

export default CardsNewOld;