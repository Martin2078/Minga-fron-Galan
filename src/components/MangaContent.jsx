import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MangaContent = (props) => {
  const { manga, chapters, hasPrevPage, hasNextPage, showChapters, onPageChange } = props
  const [currentPage, setCurrentPage] = useState(1)

  const handlePrevPage = () => {
    if (hasPrevPage) {
      setCurrentPage((prev) => prev - 1)
      onPageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (hasNextPage) {
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
                    src={manga?.cover_photo}
                    alt='cover_chapter'
                  />
                  <div className='flex flex-col ml-2 gap-2'>
                    <Link to={`/chapter/${chapter?._id}/1`}>{chapter?.title}</Link>
                    <div className='flex'>
                      <img src='../public/image/icon_comment.png' alt='icon_comment' />
                      <p>N° XX</p>
                    </div>
                  </div>
                  <p className='text-white bg-gradient-to-b from-pink-300 to-pink-500 rounded-full w-20 h-10 text-center font-bold text-xl'>
                    read
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className='flex justify-center'>
            {hasPrevPage && (
              <button className='text-white bg-gradient-to-b from-pink-300 to-pink-500 rounded-md w-32 h-10 text-sm my-4 ml-2' onClick={handlePrevPage}>Página anterior</button>
            )}
            {hasNextPage && (
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
    </div>
  );
};

export default MangaContent;