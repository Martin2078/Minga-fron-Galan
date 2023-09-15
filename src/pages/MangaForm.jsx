import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Alert from '../components/Alert'

const MangaForm = () => {
    const [categories, setCategories] = useState([])
    const [formData, setFormData] = useState({
        title: '',
        category_id: '',
        cover_photo: '',
        description: ''
    })
    const [show, setShow] = useState(false);
    const [alertType, setAlertType] = useState(null);
    const [alertMessage, setAlertMessage] = useState("");

    const algoReducer = useSelector((store) => store.mangaReducer)

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
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlnbmFAbWguY29tLmFyIiwiaWF0IjoxNjk0NjM4MjM1LCJleHAiOjE2OTQ3MjQ2MzV9.ovoGmE11HSW5vnjaxCeQEAeAYO7hf8mZ66tb4lqhDNo"
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
            setAlertType("success");
            setAlertMessage("Your manga was successfully created");
            setShow(true);
            navigate('/')
        } catch (error) {
            if (error.response) {
                // La respuesta del servidor contiene detalles del error
                console.error('Error de respuesta:', error.response.data);
              } else if (error.request) {
                // La solicitud se hizo pero no se recibió una respuesta
                console.error('Error de solicitud:', error.request);
              } else {
                // Ocurrió un error durante la configuración de la solicitud
                console.error('Error de configuración de solicitud:', error.message); 
                setShow(false);
              }
               // Mostrar alerta de error
               setAlertType("error");
               setAlertMessage("Error creating manga, please try again with the required info");
               setShow(true);
        }
    }

    useEffect(() => {

    /*     const token = localStorage.getItem('token')
        if (token) {
            const decodedToken = 
        }
 */
        getCategories()

    },[])

  return (
    <div className='h-screen bg-slate-100 flex flex-col justify-center items-center'>
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
        {show && <Alert message={alertMessage} type={alertType} />}
    </div>
  )
}

export default MangaForm