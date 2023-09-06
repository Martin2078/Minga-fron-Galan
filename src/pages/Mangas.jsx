import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const Mangas = () => {

  const [mangas, setMangas] = useState([])
  const [categories, setCategories] = useState()
  const [text, setText] = useState("")
  const [check, setCheck] = useState([])
  const [page, setPage] = useState(1)
  const [maxPages,setMaxPages]=useState()
  const [next,setNext]=useState()
  const [prev,setPrev]=useState()
  const [active,setActive]=useState([])
  async function getMangas() {
    try {
      let { data } = await axios(`http://localhost:8080/mangas?page=${page}&title=${text}&category=${check.join(",")}`)
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
      let { data } = await axios("http://localhost:8080/categories")
      setCategories(data.response)
    } catch (error) {
      console.log(error)
    }
  }

  function activos(id) {
    if (!active.includes(id)) {
      setActive([...active,id])
    } else {
      setActive(active.filter(boton_id => boton_id !== id))
    }
  }
  function checkeados(id) {
    if (!check.includes(id)) {
      setCheck([...check, id])
    } else {
      setCheck(check.filter(category => category !== id))
    }
  }
  useEffect(() => {
    getMangas()
    getCategories()

  }, [text, check, page])

  return (
    <div className='h-full flex flex-col items-center'>
      <div className='h-fit w-full flex flex-col items-center'>


        <div className="w-full  bg-cover flex flex-col justify-center items-center lg:gap-20 min-[320px]:gap-10 bg-[url('../public/images/fondo-mangas.png')] lg:bg-center min-[320px]:bg-center min-[320px]:h-[290px] lg:h-[500px]">
          <h1 className='lg:text-5xl min-[320px]:text-4xl min-[320px]:mt-6	text-white font-["Roboto"] font-bold'>Mangas</h1>
          <div className='lg:w-3/6 min-[320px]:w-5/6 bg-white flex items-center  lg:rounded-lg lg:px-4 lg:py-1 gap-2 min-[320px]:rounded-full min-[320px]:py-2 min-[320px]:px-2'>
            <button className='bg-white rounded'><img src="../../public/images/search-icon.png" alt="" /></button>
            <input id='search' onInput={(e) => {setText(e.target.value); setPage(1)}} type="search" className='w-full h-8 border-none text-center' placeholder='Find Your Manga Here' />
          </div>
        </div>
        
        <div className='flex flex-col items-center h-fit bg-white lg:-translate-y-10 min-[320px]:-translate-y-12 py-5 lg:rounded-xl lg:w-11/12 min-[320px]:w-full min-[320px]:rounded-t-[55px]'>

            <div className='w-3/6 flex justify-evenly mb-10 mt-5 min-[320px]:gap-2 lg:gap-0'>
              <button onClick={() => { setCheck([]); setText(""); search.value = "" }} className='lg:block min-[320px]:hidden rounded-full p-2 px-3 bg-[#999]'>todos</button>
              {(categories?.length>0) ? categories.map((category) => (
                <button onClick={() => {checkeados(category._id);setPage(1); activos(category._id)   } } className='rounded-full lg:p-2 lg:px-3 min-[320px]:p-1 min-[320px]:px-2 border ' key={category._id} style={{backgroundColor:category?.hover, color:category?.color, bg:active?.includes(category._id) ? 'white' : ""}}>
                  {category?.name}
                </button>
              )
              ): <p>Lo lamentamos, no hay nada que concuerde con esa busqueda!</p>
              }
            </div>

            <div className='flex flex-wrap gap-8 justify-center h-fit lg:w-5/6 lg:flex-row min-[320px]:flex-col min-[320px]:items-center  min-[320px]:w-full'>
              {(mangas.length>0) ? mangas.map((manga) => (
                <Link to={`/manga/:${manga._id}`} key={manga._id} className='flex items-center lg:w-2/6 min-[320px]:w-5/6 justify-between rounded-xl bg-white pl-3 shadow-lg lg:hover:scale-110 lg:border-l-amber-700'>

                  <div className='py-5 px-0 flex flex-col items-start w-7/12 h-full justify-between'>
                    <div>
                      <h2 className='text-black font-bold lg:w-full min-[320px]:w-5/6'>{manga.title}</h2>
                      <p className='text-[#8883F0]'>{categories.map((category)=>{
                        if (manga.category_id===category._id) {
                        return category.name
                      } })}</p>
                    </div>
      
                    <Link to={"/manga/:id"} className='p-1 px-6 bg-green-200 text-green-600 text-sm rounded-xl lg:flex min-[320px]:hidden lg:mt-10'>Read</Link>
                   
                  </div>

                  <div className='w-5/12 flex justify-end'>
                    <img className='lg:w-28 lg:h-40 min-[320px]:h-32 min-[320px]:w-28 object-initial object-left rounded-r-xl' src={manga.cover_photo} alt="" />
                  </div>   
                </Link>)
              ) : <p>Lo lamentamos, no hay nada que concuerde con esa busqueda!</p>
              }
            </div>

            <div className='flex items-center gap-2 mt-10'>
              <button className={`${prev ? "" : "hidden"}`} onClick={()=>setPage(page-1)}><img className='rotate-180' src="../../public/images/pagination-arrow.png" alt="" /></button>
              <button className={`${page == 1 ? "text-blue-700 font-bold" : ""}`} onClick={() => setPage(1)}>{maxPages-3}...</button>
              <button className={`${page == 2 ? "text-blue-700 font-bold" : ""}`} onClick={() => setPage(2)}>{maxPages-2}...</button>
              <button className={`${page == 3 ? "text-blue-700 font-bold" : ""}`} onClick={() => setPage(3)}>{maxPages-1}...</button>
              <button className={`${page == maxPages ? "text-blue-700 font-bold" : ""}`} onClick={()=>setPage(maxPages)}>{maxPages}...</button>
              <button className={`${next ? "" : "hidden"}`} onClick={()=>setPage(page+1)} ><img src="../../public/images/pagination-arrow.png" alt="" /></button>
            </div>

          </div>
        


      </div>
    </div>
  )
}

export default Mangas