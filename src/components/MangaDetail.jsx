import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import MangaInfo from './MangaInfo'
import MangaButton from './MangaButton'
import MangaContent from './MangaContent'
import MangaRating from './MangasRating'

let MangaDetail = () => {
  let { id } = useParams()
  let [ manga, setManga ] = useState(null)
  let [ currentPage, setCurrentPage ] = useState(1)
  let [ chapters, setChapters ] = useState([])
  let [ hasPrev, setHasPrev] = useState(false)
  let [ hasNext, setHasNext ] = useState(false)
  let [ showChapters, setShowChapters ] = useState(false)

  useEffect(() => {
    axios.get(`http://localhost:4000/mangas/${id}`)
      .then((response) => {
        console.log(response.data.response)
        setManga(response.data.response)
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
  }, [id, currentPage, showChapters])

  return (
    <div>
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
    </div>
  )
}

export default MangaDetail

/* const MangaDetail = ({manga,chapters,id}) => {
    return (
      <div className=''></div>
    )
  }
  
  export default MangaDetail */