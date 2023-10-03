import React from 'react'

const CommentNotAuthor = ({comentario,commentOpen,setCommentOpen,setThisComment,thisComment}) => {
    return (
        <>
            <div className='flex gap-2 items-center'>
                <img src={comentario.user_id.photo} className='w-8 h-8 rounded-full object-center' alt="" />
                <h2 className='font-bold'>{comentario.user_id.email}</h2>
            </div>
            <div className='lg:pb-14 min-[320px]:pb-11 px-1 cursor-pointer' onClick={() => { if (!commentOpen) { setCommentOpen(!commentOpen) }; setThisComment({ ...thisComment, createdAt: comentario.createdAt, text: comentario.text, user_id: comentario.user_id }); }}>
                <p className='w-full'>{(comentario.text.length > 20) ? (<>{comentario.text.slice(0, 20)}...</>) : (comentario.text)} </p>
            </div>
            </>
    )
}

export default CommentNotAuthor