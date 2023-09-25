import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Index from './Index'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import editChapterAction from '../redux/actions/editChapterAction.js'
import deleteChapterAction from '../redux/actions/deleteChapterAction.js'

const EditChapter = () => {
    const { user, token } = useSelector((store) => store.profile)
    const [array, setArray] = useState([]);
    const [title, setTitle] = useState('');
    const [photo, setPhoto] = useState('../images/dbf359808a7c4589cdd2c99920e048c7.jpg');
    const [id, setId] = useState(null);
    const [editTitle, setEditTitle] = useState('');

    const chapterTitle = useRef();
    const chapterField = useRef();
    const chapterEditInfo = useRef();
    const dispatch = useDispatch()

    const getManga = async () => {
        try {
            const mangaById = await axios.get('http://localhost:4000/chapters/me?manga_id=64f16659401f669668888fe1', {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });

            const mangaChaptersArray = mangaById.data;

            if (Array.isArray(mangaChaptersArray)) {
                setArray(mangaChaptersArray);
            } else {
                console.error('mangaChaptersArray no es un array válido:', mangaChaptersArray);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const editManga = async (e) => {
        try {
            e.preventDefault();

            if (!id) {
                console.error('ID de capítulo no encontrado.');
                return;
            }

            const { value: confirmEdit } = await Swal.fire({
                title: 'Are you sure you want to edit this chapter?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
            });

            if (!confirmEdit) {
                return;
            }

            const updatedChapter = {
                [chapterField.current.value]:
                    chapterField.current.value === 'title'
                        ? editTitle
                        : chapterEditInfo.current.value,
            };

            try {
                await dispatch(editChapterAction({id, info: updatedChapter, token}))
                Swal.fire('Success!', 'Chapter edited successfully.', 'success');
            } catch (error) {
                console.error('Error al actualizar el capítulo en la base de datos.');
                return;
            }
           
            const updatedArray = array.map((chapter) => {
                if (chapter.title === title) {
                    return {
                        ...chapter,
                        ...updatedChapter,
                    };
                }
                return chapter;
            });
            setArray(updatedArray);
        } catch (error) {
            console.error('Error en la solicitud PUT:', error);
        }
    };

    const deleteManga = async (e) => {
        try {
            e.preventDefault();

            const { value: confirmDelete } = await Swal.fire({
                title: 'Are you sure you want to delete this chapter?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it.',
                cancelButtonText: 'No, cancel.',
            });

            if (!confirmDelete) {
                return;
            }

            try {
                await dispatch(deleteChapterAction({id, token}))
                Swal.fire('Success!', 'Chapter deleted successfully.', 'success');
            } catch (error) {
                console.error('Error al eliminar el capítulo de la base de datos.');
                return;
            }

            const modifiedChapterArray = array.filter((chapter) => chapter.title !== title)
            setArray(modifiedChapterArray)
        } catch (error) {
            console.error(error);
        }
    };

    const handleTitle = async (event) => {
        let titleValue = event.target.value;
        setTitle(titleValue);

        const selectedChapter = array.find((chapter) => chapter.title === titleValue);
        if (selectedChapter) {
            setPhoto(selectedChapter.cover_photo);
            setId(selectedChapter._id);
        } else {
            setPhoto('');
            setId(null);
        }
    };

    useEffect(() => {
        getManga();
    }, []);

    return (<>
       {user.role === 1 || user.role === 2 ? (
        <div className="h-screen bg-slate-100 flex flex-col justify-center pt-12 items-center md:flex-row">
          <form className="flex flex-col h-2/3 w-2/3 items-center">
            <label htmlFor="" className="text-2xl pb-5">
              Edit Chapter
            </label>
            <h1 className="border-b-2 border-neutral-400 bg-slate-100 text-center text-xs pt-5 w-full md:w-1/2">
              Alice in Borderland
            </h1>
            <select
              onChange={handleTitle}
              ref={chapterTitle}
              className="border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2"
            >
              {array
                ? array.map((chapter) => (
                    <option value={chapter.title} key={chapter._id}>
                      {chapter.title}
                    </option>
                  ))
                : <option>Option 1</option>}
            </select>

            <select
              ref={chapterField}
              className="border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2"
            >
              <option value="title">Title</option>
              <option value="cover_photo">Cover photo</option>
              <option value="order">Order</option>
            </select>
            <input
              ref={chapterEditInfo}
              type="text"
              className="border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2"
              placeholder="data to edit"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />

            <button
              onClick={(e) => {
                e.preventDefault();
                editManga(e);
              }}
              className="bg-emerald-400 text-white font-semibold py-3 px-5 mt-10 rounded-full w-full md:w-1/2"
            >
              Edit
            </button>
            <button
              onClick={deleteManga}
              className="text-rose-400 bg-red-100 font-semibold py-3 px-5 mt-5 rounded-full w-full md:w-1/2"
            >
              Delete
            </button>
          </form>
          <div className="text-center max-md: hidden md:h-2/3 md:flex md:flex-col md:items-center md:w-1/2 md:me-10">
            <h1>Chapter: {title}</h1>
            <img className="h-96 w-52" src={photo} alt="" />
          </div>
        </div>
      ) : (
        <Index />
      )}
      </>
    );
};

export default EditChapter;
