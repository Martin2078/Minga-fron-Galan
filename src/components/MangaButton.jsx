import React from 'react'

const MangaButton = (props) => {
    let {showChapters, setShowChapters} = props
    return (
        <>
            <div className='flex justify-center mx-8'>
                <button className={`w-40 h-10 p-1 text-xs  rounded-l-full lg:w-60 lg:h-14 lg:text-lg ${!showChapters ? ' text-white bg-gradient-to-b from-pink-300 to-pink-500' : 'bg-gray-300 text-gray-600'}`} onClick={() => setShowChapters(false)}>Manga</button>
                <button className={`w-40 h-10 p-1 text-xs bg-gray-300 text-gray-600 rounded-r-full lg:w-60
                 lg:h-14 lg:text-lg ${showChapters ? 'bg-gradient-to-b from-pink-300 to-pink-500 text-white' : 'bg-gray-300'}`} onClick={() => setShowChapters(true)}>Chapter</button>
            </div>
        </>
    );
}

export default MangaButton