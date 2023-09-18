import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {filters} from "../redux/actions/mangasAction";

const Mangas = () => {

  const [mangas, setMangas] = useState([])
  const [categories, setCategories] = useState()

  const [page, setPage] = useState(1)
  const [maxPages, setMaxPages] = useState()
  const [next, setNext] = useState()
  const [prev, setPrev] = useState()

  const { check, text } = useSelector((store) => store.mangas)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function getMangas() {
    try {
      let { data } = await axios(`http://localhost:4000/mangas?page=${page}&title=${text}&category=${check.join(",")}`)
      setMangas(data.response)
      setMaxPages(data.pages.maxPages)
      setNext(data.pages.next)
      setPrev(data.pages.prev)
    } catch (error) {
      console.log(error)
    }
  }
  async function getCategories() {
    try {
      let { data } = await axios("http://localhost:4000/categories")
      setCategories(data.response)
    } catch (error) {
      console.log(error)
    }
  }
  function pagination(start, max) {
    let template = []
    for (let i = start; i < max; i++) {
      template.push(<button className={`${page == i ? "text-blue-700 font-bold" : ""}`} onClick={() => setPage(i)}>{i}...</button>)
    }
    template.push(<button className={`${page == max ? "text-blue-700 font-bold" : ""}`} onClick={() => setPage(max)}>{max}...</button>)
    return template
  }
  function activos(id, color, hover) {
    if (!check.includes(id)) {
      return color
    } else {
      return hover
    }
  }
  function checkeados(id) {
    if (!check.includes(id)) {
      setCheck([...check, id])
    } else {
      setCheck(check.filter(category => category !== id))
    }
  }

  const applyFilters = (filterName, filterValue) => {
    if (filterName === 'text') {

      dispatch(filters({
        checks: null,
        text: filterValue
      }))
    } else if (filterName === 'check') {
      if (!check.includes(filterValue)) {
 
        dispatch(filters({
          checks: [...check, filterValue],
          text: null
        }))
      } else {

        dispatch(filters({
          checks: check.filter((category_id) => category_id !== filterValue),
          text: null
        }))
      }
    }

  };

  const clearFilters = () => {
  
    dispatch(filters({
      checks: [],
      text: ""
    }))
  }

  useEffect(() => {
    getMangas()
    getCategories()

  }, [text, check, page])

  return (
    <div className='h-full flex flex-col items-center'>
      <div className='h-fit w-full flex flex-col items-center'>


        <div className="w-full  bg-cover flex flex-col justify-center items-center lg:gap-20 min-[320px]:gap-10 bg-[url('../images/fondo-mangas.png')] lg:bg-center min-[320px]:bg-center min-[320px]:h-[290px] lg:h-[500px]">
          <h1 className='lg:text-5xl min-[320px]:text-4xl min-[320px]:mt-6	text-white font-["Roboto"] font-bold'>Mangas</h1>
          <div className='lg:w-3/6 min-[320px]:w-5/6 bg-white flex items-center  lg:rounded-lg lg:px-4 lg:py-1 gap-2 min-[320px]:rounded-full min-[320px]:py-2 min-[320px]:px-2'>
            <button className='bg-white rounded'><img src="../images/search-icon.png" alt="" /></button>
            <input id='search' onInput={(e) => { applyFilters("text", e.target.value); setPage(1) }} type="search" className='w-full h-8 border-none text-center' placeholder='Find Your Manga Here' />
          </div>
        </div>

        <div className='flex flex-col items-center h-fit bg-white lg:-translate-y-10 min-[320px]:-translate-y-12 py-5 lg:rounded-xl lg:w-11/12 min-[320px]:w-full min-[320px]:rounded-t-[55px]'>

          <div className='w-3/6 flex justify-evenly mb-10 mt-5 min-[320px]:gap-2 lg:gap-0'>
            <button onClick={() => { clearFilters(); search.value= "" }} className='lg:block min-[320px]:hidden rounded-full p-2 px-3 bg-[#999]'>All</button>
            {(categories?.length > 0) ? categories.map((category) => (
              <button onClick={() => { applyFilters("check", category._id); setPage(1); }} className='rounded-full lg:p-2 lg:px-3 min-[320px]:p-1 min-[320px]:px-2 border ' key={category._id} style={{ backgroundColor: activos(category._id, category.color, category.hover), color: activos(category._id, category.hover, category.color) }}>
                {category?.name}
              </button>
            )
            ) : <p>We're sorry, there's no match!</p>
            }
          </div>

          <div className='flex flex-wrap gap-8 justify-center h-fit lg:w-5/6 lg:flex-row min-[320px]:flex-col min-[320px]:items-center  min-[320px]:w-full'>
            {(mangas?.length > 0) ? mangas.map((manga) => (
              <Link to={`/mangas/${manga._id}`} key={manga._id} className='flex items-center lg:w-2/6 min-[320px]:w-5/6 justify-between rounded-xl bg-white shadow-lg lg:hover:scale-110'>
                <div className='px-[3px] lg:py-14 min-[320px]:py-10 mr-4 bg-[#8883F0]'></div>
                <div className='py-5 px-0 flex flex-col items-start w-7/12 h-full gap-6'>

                  <div>
                    <h2 className='text-black font-bold lg:w-full min-[320px]:w-5/6'>{manga.title}</h2>
                    <p className='text-[#8883F0]'>{categories.map((category) => {
                      if (manga.category_id === category._id) {
                        return category.name
                      }
                    })}</p>
                  </div>
                  <button className='p-1 px-6 bg-green-200 text-green-600 text-sm rounded-xl lg:flex min-[320px]:hidden'>Read</button>
                </div>

                <div className='w-5/12 flex justify-end'>
                  <img className='lg:w-28 lg:h-40 min-[320px]:h-32 min-[320px]:w-28 object-initial object-left rounded-r-xl' src={manga.cover_photo} alt="" />
                </div>
              </Link>)
            ) : <p>We're sorry, there's no match!</p>
            }
          </div>

        <div className='flex items-center gap-2 mt-10'>
            <button className={`${prev ? "" : "hidden"}`} onClick={() => setPage(page - 1)}><img className='rotate-180' src="../../images/pagination-arrow.png" alt="" /></button>
            {(maxPages==0)?(<button className="text-blue-700 font-bold" onClick={() => setPage(1)}>1...</button>) 
            : pagination(1, maxPages)}
            <button className={`${next ? "" : "hidden"}`} onClick={() => setPage(page + 1)} ><img src="../../images/pagination-arrow.png" alt="" /></button>
          </div>

        </div>



      </div>
    </div>
  )
}

export default Mangas
