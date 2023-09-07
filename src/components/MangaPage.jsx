import React from 'react'
import flechaManga from '../../public/images/Arrow_2.svg'


const MangaPage = ({ currentPage, funcPrev, funcNext }) => {

    return (
        <div className='w-full h-4/6 mt-5 flex items-center justify-center'>
            <img className="absolute left-5 bg-white rounded-full p-2 opacity-50" onClick={funcPrev} src={flechaManga} alt="" />
            <img className='w-96 h-full' src={currentPage} alt="" />
            <img className="rotate-180 absolute right-5 bg-white rounded-full p-2 opacity-50" onClick={funcNext} src={flechaManga} alt="" />
        </div>
    )
}

export default MangaPage

