import React from 'react'
import cruz from '/images/cruz.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ButtonNav from './ButtonNav'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import profile from '../redux/actions/me_authors'
import { useNavigate } from 'react-router-dom'
const Display = ({ open, setOpen }) => {

  const { user, token } = useSelector((store) => store.profile)
  const author=false
  if(user.role>0){
    author=true }
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const signout = async () => {
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    try {
      await axios.post('http://localhost:4000/auth/logout', null, headers)
      dispatch(profile({}))
      navigate("/")
    } catch (error) {
      alert('error!')
    }
  }
  return (
    <>
      <div className='bg-gradient-to-r from-[#4338CA] to-[#5E52F3] lg:w-1/4 min-[320px]:w-full h-screen fixed top-0 z-10 flex flex-col p-5 shadow-[0_0_20px_-5px] shadow-[#4338CA] gap-5'>
        <button className='flex justify-end' onClick={() => setOpen(!open)}>
          <img className='w-8 p-2 ' src={cruz} alt="" />
        </button>
        <div className='text-white flex flex-col gap-5 p-5 border-b-2'>
          <Link to={"/"} className='flex justify-center py-2 px-3 rounded-full '>Home</Link>
          {token?(<Link to={"/Mangas"} className='flex justify-center py-2 px-3 rounded-full'>Mangas</Link>) : null}
            {author ? (
              <Link to={'/manga-form'} className='flex justify-center py-2 px-3 rounded-full'>
              New Manga
            </Link>
          ) : null}
        </div>
        <div className='text-white border-b-2 flex flex-col items-center px-3 pt-2 pb-4 gap-4'>
          {!token ? (<p className='font-bold'>Join Us</p>) : null}
          {token ? (<><div className='flex gap-6 items-center'>
            <Link to={"/Me"}><img src={user.photo} className='w-10 rounded-full' alt="" /></Link>
            <p className='text-base'>{user.email}</p>
          </div>
            <ButtonNav to="" title="Log out" function={signout} />
          </>)
            : (<div className='flex gap-10 my-2'>
              <ButtonNav to="/signIn" title="Login" />
              <ButtonNav to="/signUp" title="Register" />
            </div>)}
        </div>
      </div>

    </>
  )
}

export default Display