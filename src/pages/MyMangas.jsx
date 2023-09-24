import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import Alert from "../components/Alert2";
import myMangasAction from '../redux/actions/myMangasAction'
import deleteManga from '../redux/actions/deleteMangaAction'
import getCategoriesAction from '../redux/actions/getCategoriesAction'
import MangaEditForm from '../components/MangaEditForm'

let MyMangas = () => {
    
    let dispatch = useDispatch()
    let [show, setShow] = useState(false);
    let [message, setMessage] = useState([]);
    /* let [dataResponse, setDataResponse] = useState(null); */
    const navigate = useNavigate()
    const token = useSelector((state) => state.profile.token)
    let myMangas = useSelector((state) => state.myMangas.mangas)

    const [openModals, setOpenModals] = useState({})
    const [deleteAlerts, setDeleteAlerts] = useState({})

    const getCategories = async () => {
        dispatch(getCategoriesAction())
    }

    const getMyMangas = async () => {
        dispatch(myMangasAction(token))
    }

    /* const removeManga = async (id) => {
        dispatch(deleteManga({token, id}))
    }
 */
    async function handleDelete(id) {
        try {
            await dispatch(deleteManga({ token, id }))
            await dispatch(myMangasAction(token))
        } catch (error) {
            console.log('Error:', error)
        }
    }
    

    function handleDeleteButton(mangaId){
        setMessage("Are you sure you want to delete this manga?")
        setDeleteAlerts({ ...deleteAlerts, [mangaId]: true })
    }

    useEffect(() => {
        getCategories()
        getMyMangas()
    }, [])
    console.log(myMangas)
    return (
        <>
            <div className="w-full min-h-[55vh] bg-cover align-middle flex justify-center items-center lg:bg-[url('../images/backgroundMyMangas.png')] lg:h-4/6 lg:bg-center min-[320px]:bg-[url('../images/backgroundMyMangas.png')] min-[320px]:h-screen">
                <h1>Author's Name</h1>
            </div>
            <div className="flex flex-col">
                <div className="justify-center p-4 flex flex-wrap gap-4">
                    <div className='flex items-center lg:w-2/6 min-[320px]:w-5/6 justify-center rounded-xl bg-white shadow-lg lg:hover:scale-110'>
                        <div className='px-[3px] lg:py-14 min-[320px]:py-10 mr-4 bg-[#8883F0]'></div>
                        <div className='py-5 px-0 flex flex-col items-start w-7/12 h-full gap-6'>
                            <div>
                                <h2 className='text-black font-bold lg:w-full min-[320px]:w-5/6'>New Manga</h2>
                                <p className='text-[#8883F0]'>Category</p>
                            </div>
                            <Link to={`/manga-form`} className='p-1 px-6 bg-violet-200 text-indigo-400 text-sm rounded-xl lg:flex'>➕</Link>
                        </div>

                        <div className='w-5/12 flex justify-end'>
                            <img className='lg:w-28 lg:h-40 min-[320px]:h-32 min-[320px]:w-28 object-initial object-left rounded-r-xl' src='../../images/newManga.png' alt="" />
                        </div>
                    </div>
                {myMangas?.map( manga => (
                    <div key={manga._id} className='flex items-center lg:w-2/6 min-[320px]:w-5/6 justify-center rounded-xl bg-white shadow-lg lg:hover:scale-110'>
                        <div className='px-[3px] lg:py-14 min-[320px]:py-10 mr-4 bg-[#8883F0]'></div>
                        <div className='py-5 px-0 flex flex-col items-start w-7/12 h-full gap-6'>
                            <div>
                                <div className="flex gap-4">
                                    <Link to={`/${manga._id}/chapter-form`}>
                                        <img className="w-2.5 h-2.5 p-0.5 rounded-full border border-neutral-800 justify-start items-start gap-2.5 inline-flex" src="../../images/signoMas.svg" alt="" />
                                    </Link>
                                    <Link to={`/edit/${manga._id}`}>
                                        <img className="w-2.5 h-2.5 p-0.5 rounded-full border border-neutral-800 justify-center items-center gap-2.5 inline-flex" src="../../images/signoLapiz.svg" alt="" />
                                    </Link>
                                </div>
                                <h2 className='text-black font-bold lg:w-full min-[320px]:w-5/6'>{manga.title}</h2>
                                <p className='text-[#8883F0]'>{manga.category_id.name}</p>
                            </div>
                            <button
                                className='p-1 px-6 bg-violet-200 text-indigo-400 text-sm rounded-xl lg:flex'
                                onClick={() => {
                                    setOpenModals({ ...openModals, [manga._id]: true })
                                }}
                                >
                                    Edit
                            </button>
                            {openModals[manga._id] && <MangaEditForm id={manga._id} closeModal={() => setOpenModals({ ...openModals, [manga._id]: false })} />}
                            <button
                                onClick={() => handleDeleteButton(manga._id)}
                                className='p-1 px-6 bg-red-100 text-rose-400 text-sm rounded-xl lg:flex'
                                >
                                    Delete
                            </button>
                            {deleteAlerts[manga._id] && <Alert show={deleteAlerts[manga._id]} message={message} setShow={(value) => setDeleteAlerts({ ...deleteAlerts, [manga._id]: value })} handleDelete={() => handleDelete(manga._id)} mangaId={manga._id} />}
                        </div>

                        <div className='w-5/12 flex justify-end'>
                            <img className='lg:w-28 lg:h-40 min-[320px]:h-32 min-[320px]:w-28 object-initial object-left rounded-r-xl' src={manga.cover_photo} alt="" />
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}

export default MyMangas