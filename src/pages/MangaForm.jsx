import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Alert from '../components/Alert'
import { useSelector } from 'react-redux'
import NotAllow from '../components/NotAllow'

const MangaForm = () => {
    const [categories, setCategories] = useState([])
    const [formData, setFormData] = useState({
        title: '',
        category_id: '',
        cover_photo: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:4000/mangas', {
                ...formData
            },{
                headers: {Authorization:'Bearer ' + token}
            })
            console.log('Manga created:', response.data)
            setFormData({
                title: '',
                category_id: '',
                cover_photo: '',
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
    },[])

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
        <input
            type="text"
            name="cover_photo"
            value={formData.cover_photo}
            onChange={handleInputChange}
            className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2'
            placeholder='Insert cover photo'
        />
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