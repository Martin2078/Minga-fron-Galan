import React, { useEffect, useState} from 'react'
import axios from 'axios'

const Mangas = () => {
  let [mangas, setMangas] = useState([])
  let apiURL = 'http://localhost:4000'

  async function getMangas() {
    try {
      let {data} = await axios.get(apiURL + '/api/mangas')
      console.log(data)
      setMangas(data.response)
    } catch (error){
      console.log(error.message)
    }
  }
  console.log(mangas)

  useEffect(()=>{
    getMangas()
  }, [])

  return (
    <div className='w-full min-h-screen flex flex-col md:flex-row gap-4'>
      { mangas ? (
        mangas.map(manga=>(<div key={manga._id}>
          <p>{manga.title}</p>
        </div>))) : (<div><p>No mangas</p></div>)
      }
    </div>
  )
}

export default Mangas