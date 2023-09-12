import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import MangaPage from '../components/MangaPage'
import PageComments from '../components/PageComments'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Page = () => {
    let { id, page } = useParams()
    let [chapter, setChapter] = useState({})
    let [count, setCount] = useState(Number(page))
    let [next, setNext] = useState("")
    let navigate = useNavigate()
    const APIurl = "http://localhost:4000"
    async function getChapter() {
        try {
            const { data } = await axios(APIurl + "/chapters/" + id)
            setChapter(data.all)
            setNext(data.next)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getChapter()
    }, [id, next])

    let nextPage = () => {
        if (count !== chapter.pages.length - 1) {
            setCount(count + 1)
            navigate("/chapter/" + id + "/" + (Number(page) + 1))
        } else {
            navigate("/chapter/" + next + "/1")
            setCount(1)
        }


    }
    let prevPage = () => {
        if (count > 1) {
            setCount(count - 1)
            navigate("/chapter/" + id + "/" + (Number(page) - 1))
        } else {
            navigate("/mangas/" + chapter.manga_id)
        }

    }
    return (
        <>
            <div className='h-screen w-full'>
                {chapter?.pages?.length > 0 ?
                    (<><PageHeader number={chapter?.order} title={chapter?.title} />
                        <MangaPage currentPage={chapter.pages[count - 1]} funcPrev={prevPage} funcNext={nextPage} />
                        <PageComments /></>) : ("")}
            </div>
        </>
    )
}

export default Page
