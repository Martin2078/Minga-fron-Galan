import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CommentList from './CommentList';

const MangaContent = (props) => {
  const { manga, chapters, hasPrev, hasNext, showChapters, onPageChange } = props
  const [currentPage, setCurrentPage] = useState(1)
  const [open,setOpen]=useState(false)
  const [chapterId,setChapterId]=useState()
  const [chapterTitle,setChapterTitle]=useState()

  const handlePrevPage = () => {
    if (hasPrev) {
      setCurrentPage((prev) => prev - 1)
      onPageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (hasNext) {
      setCurrentPage((prev) => prev + 1)
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className='mt-10'>
      {showChapters ? (
        <div>
          <ul>
            {chapters.map((chapter, Index) => (
              <li key={Index}>
                <div className='flex items-center justify-evenly'>
                  <img
                    className='w-20 h-20 p-2'
                    src={chapter?.cover_photo}
                    alt='cover_chapter'
                  />
                  <div className='flex flex-col ml-2 gap-2'>
                    <p>{chapter?.title}</p>
                    <div className='flex'>
                      <button onClick={()=>{if (!open) {
                        setOpen(!open)
                      }; setChapterId(chapter._id); setChapterTitle(chapter.title)}}><img src='../images/icon_comment.png' alt='icon_comment'/></button>
                      <p>N° XX</p>
                    </div>
                  </div>
                  <Link to={`/chapter/${chapter?._id}/1`}><p className='text-white bg-gradient-to-b from-pink-300 to-pink-500 rounded-full w-20 h-10 text-center font-bold text-xl'>
                    read
                  </p></Link>
                </div>
              </li>
            ))}
          </ul>
          <div className='flex justify-center'>
            {hasPrev && (
              <button className='text-white bg-gradient-to-b from-pink-300 to-pink-500 rounded-md w-32 h-10 text-sm my-4 ml-2' onClick={handlePrevPage}>Página anterior</button>
            )}
            {hasNext && (
              <button className='text-white bg-gradient-to-b from-pink-300 to-pink-500 rounded-md w-32 h-10 text-sm my-4 ml-2' onClick={handleNextPage}>Página siguiente</button>
            )}
          </div>
        </div>
      ) : (
        <div>
          <h1 className='pl-4 pt-10 font-bold text-lg'>{manga?.title}</h1>
          <p className='px-4 pt-2 pb-10'>{manga?.description}</p>
        </div>
      )}
       {open ? (<CommentList open={open} setOpen={setOpen} chapter_id={chapterId} chapterName={chapterTitle}/>) : (null)}

    </div>
  );
};

export default MangaContent;