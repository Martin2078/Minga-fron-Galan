import ButtonWelcome from './ButtonWelcome'
import React from 'react'


const Perfil = (props) => {
    const{user}=props
  return (
   <>
          <div className='mt-16   flex gap-5 mb-8 border-b-8	 justify-center'>
           <img  className='w-12 h-12 object-cover' style={{borderRadius:"100%"}} src={user.authorPhoto} alt="" />
            <div>
           <h2 > {user.authorName} {user.authorLast_name}</h2>
           <p>{user.authorCity},{user.authorCountry}</p>
           </div>
          </div>
          <div className='h-scren w-full'>
          
          </div>
          </>
  )
}

export default Perfil