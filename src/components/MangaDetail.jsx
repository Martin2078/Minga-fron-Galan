import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import MangaInfo from './MangaInfo'
import MangaButton from './MangaButton'
import MangaContent from './MangaContent'

let MangaDetail = () => {
  let { id } = useParams()
  let [ manga, setManga ] = useState(null)
  let [ currentPage, setCurrentPage ] = useState(1)
  let [ chapters, setChapters ] = useState([])
  let [ hasPrev, setHasPrev] = useState(false)
  let [ hasNext, setHasNext ] = useState(false)
  let [ showChapters, setShowChapters ] = useState(false)

  useEffect(() => {
    axios.get(`http://localhost:4000/api/mangas/${id}`)
      .then((response) => {
        setManga(response.data)
      })
      .catch((err) => {
        console.log('Error al obtener los detalles del manga: ', err)
      })
  }, [id])

  useEffect(() => {
    axios.get(`http://localhost:4000/api/chapters?manga_id=${id}&page=${currentPage}`)
      .then((response) => {
        setChapters(response.data.chapters)
        setHasPrev(response.data.prev)
        setHasNext(response.data.next)
      })
      .catch((err) => {
        console.log('Error al obtener los capítulos: ', err)
      })
  }, [id, currentPage, showChapters])

  return (
    <div>
      <MangaInfo title={manga?.title} cover_photo={manga?.cover_photo} categories={manga?.category_id.name} />
      <MangaButton {...{ showChapters, setShowChapters }} />
      <MangaContent
        {...{
          manga,
          chapters,
          hasPrev,
          hasNext,
          showChapters,
          onPageChange: setCurrentPage, // Pasa setCurrentPage como onPageChange
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