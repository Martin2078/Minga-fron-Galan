import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Alert from '../components/Alert'
import { useSelector } from 'react-redux'
import NotAllow from '../components/NotAllow'
import profile from '../redux/actions/me_authors'
import { useDispatch } from 'react-redux'

const MangaForm = () => {
    const [categories, setCategories] = useState([])
    const dispatch=useDispatch()
    const [formData, setFormData] = useState({
        title: '',
        category_id: '',
        cover_photo: null,
        description: ''
    })
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState([]);
    const [dataResponse, setDataResponse] = useState(null);
    const token = useSelector((state) => state.profile.token)
    async function getCategories() {
        try {
            let { data } = await axios.get('http://localhost:4000/categories')
            setCategories(data.response)
        } catch (error) {
            console.log(error)
        }
    }

    const referencia = useRef()
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      }

    const navigate = useNavigate()
    
    function setFile(e) {
        setFormData({...formData,cover_photo:e.target.files[0]})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData2=new FormData();
        formData2.append('cover_photo',formData.cover_photo)
        formData2.append('title',formData.title)
        formData2.append('description',formData.description)
        formData2.append('category_id',formData.category_id)
        try {
            const response = await axios.post('http://localhost:4000/mangas',formData2,{
                headers: {Authorization:'Bearer ' + token}
            })
            console.log('Manga created:', response.data)
            setFormData({
                title: '',
                category_id: '',
                cover_photo: null,
                description: ''
            })
            setMessage(response.data.message)
            setDataResponse(response.data.message);
            /* navigate('/') */
        } catch (error) {
            console.log(error)
            if (error.response) {
                console.error('Error de respuesta:', error.response.data);
              } else if (error.request) {
                console.error('Error de solicitud:', error.request);
              } else {
                console.error('Error de configuración de solicitud:', error.message); 
              }
               setMessage([error.response.data.message]);
               setDataResponse(null)

        }
    }

    useEffect(() => {
        getCategories()
        if(!token.length>0){
            if (localStorage.length>0) {
                 const tokenLocal=localStorage.getItem('token')
                 const userLocal= JSON.parse(localStorage.getItem('user'))
                 dispatch(profile({token: tokenLocal,findUser: userLocal}))
               }
             }
    },[token])

    useEffect(() => {
        if (dataResponse || message.length > 0) {
          setShow(true);
        }
      }, [dataResponse, message]);

  return (
    <>
    {token ? (<div className='h-screen bg-slate-100 flex flex-col justify-center items-center'>
    <form ref={referencia} onSubmit={handleSubmit} className='flex flex-col h-2/3 w-2/3 items-center'>
        <label htmlFor="category-select" className='text-2xl pb-5'>New Manga</label>
        <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2'
            placeholder='Insert title'
        />
        <select
            name="category_id"
            value={formData.category_id}
            onChange={handleInputChange}
            id="category-select"
            className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2'
        >
        <option value="">Insert Category</option>
        {categories?.map((category) => (
            <option key={category._id} value={category.name}>{category?.name}</option>
            ))}
        </select>
        <div className='w-full md:w-1/2 h-fit pt-5 flex flex-col items-start gap-1'>
        <p className='text-xs text-start'>Insert Photo</p>
        <input
            type="file"
            name="cover_photo"
            onChange={(e)=>setFile(e)}
            className='border-b-2 border-neutral-400 bg-slate-100 text-xs w-full pb-0.5'
        />
        </div>
        <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2'
            placeholder='Insert description'
        />
        <button
            type="submit"
            className='bg-indigo-700 text-white font-semibold py-2 px-5 mt-20 rounded-full w-full md:w-1/2'
        >
            Send
        </button>
    </form>
    {show && <Alert show={show} message={message} data={dataResponse} setShow={setShow} />}
</div>) : (<NotAllow props={"Debes iniciar sesion antes de ingresar aqui"}/>)}
</>
    
  )
}

export default MangaForm