import Welcome from '../components/Welcome'
import React, { useEffect } from 'react'
import Carrousel from '../components/Carrousel'
import { useDispatch } from 'react-redux'
import profile from '../redux/actions/me_authors'
import { useSelector } from 'react-redux'
const Index = () => {
  const dispatch=useDispatch()
  const token = useSelector((store) => store.profile.token)
  useEffect(()=>{
    if(!token.length>0){
     if (localStorage.length>0) {
          const tokenLocal=localStorage.getItem('token')
          const userLocal= JSON.parse(localStorage.getItem('user'))
          dispatch(profile({token: tokenLocal,findUser: userLocal}))
        }
      }
  },[])
  return (
    <main className='flex flex-col lg:h-screen min-[320px]:h-full'>

        <Welcome/>
        <div className='w-full h-2/6 lg:flex items-center justify-center min-[320px]:hidden'>
          <Carrousel/>
        </div>

      </main>
  )
}

export default Index