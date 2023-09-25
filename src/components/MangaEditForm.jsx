import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import editManga from '../redux/actions/editMangaAction'
import myMangasAction from '../redux/actions/myMangasAction'
import Alert from "../components/Alert"

const EditManga = ({ id, closeModal }) => {
    let dispatch = useDispatch()
    const [formData, setFormData] = useState({})
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState([]);
    const [editSuccess, setEditSuccess] = useState(false)
    const token = useSelector((state) => state.profile.token)
    const categories = useSelector((state) => state.categories.categories)
    let myMangas = useSelector((state) => state.myMangas.mangas)
    let thisManga = myMangas.filter((manga) => manga._id === id)
    let thisMangasCategory = thisManga[0].category_id
    let { _id, name } = thisMangasCategory
    const referencia = useRef()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const edit = await dispatch(editManga({token, id, formData}))
            await dispatch(myMangasAction(token))
            console.log(edit)
            if (edit.payload.error) {
                setMessage(edit.payload.error.message)
                setShow(true)
            } else {
                closeModal(false)
            }
        } catch (error) {
            console.log('Error:', error)
            setMessage(`Error: ${error.message}`)
        }
    }

    useEffect(() => {
        if (message.length > 0) {
          setShow(true);
        }
      }, [message]);

    return (
        <div className='absolute h-[75vh] w-[70vh] bg-slate-100 flex flex-col justify-center items-center md:flex-row'>
            <form ref={referencia} onSubmit={handleSubmit} className='flex flex-col h-2/3 w-2/3 items-center'>
                <label htmlFor="category-select" className='text-2xl pb-5'>Edit Manga</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2'
                    placeholder="Manga's title"
                />
                <input
                    type="text"
                    name="cover_photo"
                    value={formData.cover_photo}
                    onChange={handleInputChange}
                    className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2'
                    placeholder="Manga's cover photo"
                />
                <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2'
                placeholder="Manga's description" />
                <select
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleInputChange}
                    id="category-select"
                    className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2'
                >
                <option key={_id} value={name}>{name}</option>
                {categories?.map((category) => (
                    <option key={category._id} value={category.name}>{category?.name}</option>
                    ))}
                </select>
                <button
                type="submit"
                className='bg-emerald-400 text-white font-semibold py-3 px-5 mt-10 rounded-full w-full md:w-1/2'
                >
                    Edit
                </button>
                <button
                className='bg-red-600 text-white font-semibold py-3 px-5 mt-10 rounded-full w-full md:w-1/2'
                onClick={() => closeModal(false)}
                >
                    Close
                </button>
            </form>
            <div className='text-center max-md: hidden md:h-2/3 md:flex md:flex-col md:items-center md:w-1/2 md:me-10'>
                <h1>{thisManga[0].title}</h1>
                <img className='text h-96 w-52' src={thisManga[0].cover_photo} alt="" />
            </div>
            {show && <Alert show={show} message={message} setShow={setShow} />}
        </div>
    )
}

export default EditManga