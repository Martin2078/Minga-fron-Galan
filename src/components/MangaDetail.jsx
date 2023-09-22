import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import MangaInfo from './MangaInfo'
import MangaButton from './MangaButton'
import MangaContent from './MangaContent'
import MangaRating from './MangasRating'
import { useSelector, useStore, useDispatch } from 'react-redux'
import { saveManga } from '../redux/actions/mangaAction'
import NotAllow from './NotAllow'
import profile from '../redux/actions/me_authors'


let MangaDetail = () => {
  let { id } = useParams()
  /* let [ manga, setManga ] = useState(null) */
  let [ currentPage, setCurrentPage ] = useState(1)
  let [ chapters, setChapters ] = useState([])
  let [ hasPrev, setHasPrev] = useState(false)
  let [ hasNext, setHasNext ] = useState(false)
  let [ showChapters, setShowChapters ] = useState(false)
  
  const token = useSelector((store)=>store.profile.token)
  const mangaReducer = useSelector((store) => store.mangaReducer)
  const dispatch = useDispatch()
  const manga = {...useSelector((state) => state.mangaReducer.manga)}

  useEffect(() => {
    axios.get(`http://localhost:4000/mangas/${id}`)
      .then((response) => {
        dispatch(saveManga(response.data.response))
        /* setManga(response.data.response) */
      })
      .catch((err) => {
        console.log('Error al obtener los detalles del manga: ', err)
      })
  }, [id])

  useEffect(() => {
    axios.get(`http://localhost:4000/chapters?manga_id=${id}&page=${currentPage}`)
      .then((response) => {
        setChapters(response.data.response)
        setHasPrev(response.data.hasPrev)
        setHasNext(response.data.hasNext)
      })
      .catch((err) => {
        console.log('Error al obtener los capítulos: ', err)
      })
      if(!token.length>0){
        if (localStorage.length>0) {
             const tokenLocal=localStorage.getItem('token')
             const userLocal= JSON.parse(localStorage.getItem('user'))
             dispatch(profile({token: tokenLocal,findUser: userLocal}))
           }
         }
  }, [id, currentPage, showChapters,token])
  
  return (<>
    {token?(<div>
      <MangaInfo title={manga?.title} cover_photo={manga?.cover_photo} categories={manga?.category_id?.name} />
      <MangaRating />
      <MangaButton {...{ showChapters, setShowChapters }} />
      <MangaContent
        {...{
          manga,
          chapters,
          hasPrev,
          hasNext,
          showChapters,
          onPageChange: setCurrentPage
        }}
      />
    </div>):(<NotAllow props={"Debes iniciar sesion antes de ingresar aqui"}/>)}
    </> 
  )
}

export default MangaDetail

/* const MangaDetail = ({manga,chapters,id}) => {
    return (
      <div className=''></div>
    )
  }
  
  export default MangaDetail */