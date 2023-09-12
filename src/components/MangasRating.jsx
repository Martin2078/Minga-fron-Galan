import React from 'react'

const MangaRating = () => {
    return (
        <>
            <div className='flex flex-row justify-center gap-4 pt-10 pb-2'>
                <img className='bg-white rounded-full p-2 shadow-md cursor-pointer' src="../images/emoji-like.svg" alt="emoji_like" />
                <img className='bg-white rounded-full p-2 shadow-md cursor-pointer' src="../images/emoji-dislike.svg" alt="emoji_dislike" />
                <img className='bg-white rounded-full p-2 shadow-md cursor-pointer' src="../images/emoji-omg.svg" alt="emoji_omg" />
                <img className='bg-white rounded-full p-2 shadow-md cursor-pointer' src="../images/emoji-love.svg" alt="emoji_love" />
            </div>

            <div className='flex justify-center items-center gap-3 bg-slate-100 m-6 rounded-3xl p-4 shadow-md sm:w-3/5 sm:mx-auto'>
                <div className='text-center '>
                    <p className='text-3xl md:text-4xl text-gray-600'>4.5/5</p>
                    <p className='text-xs md:text-base text-gray-400'>Rating</p>
                </div>
                <img src='../images/Line.svg' alt='line' />
                <div className='text-center'>
                    <p className='text-3xl md:text-4xl text-gray-600'>265</p>
                    <p className='text-xs md:text-base text-gray-400'>Chapters</p>
                </div>
                <img src='../images/Line.svg' alt='line' />
                <div className='text-center'>
                    <p className='text-3xl md:text-4xl text-gray-600'>Eng</p>
                    <p className='text-xs md:text-base text-gray-400'>Language</p>
                </div>
            </div>
        </>

    )
}

export default MangaRating