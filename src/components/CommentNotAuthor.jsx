import React from 'react'

const CommentNotAuthor = ({comentario,commentOpen,setCommentOpen,setThisComment,thisComment}) => {
    return (
        <div className='flex flex-col w-full h-28 gap-1'>
            <div className='flex gap-2 items-center'>
                <img src={comentario.user_id.photo} className='w-8 h-8 rounded-full object-center' alt="" />
                <h2 className='font-bold'>{comentario.user_id.email}</h2>
            </div>
            <div className='h-fit px-1 cursor-pointer' onClick={() => { if (!commentOpen) { setCommentOpen(!commentOpen) }; setThisComment({ ...thisComment, createdAt: comentario.createdAt, text: comentario.text, user_id: comentario.user_id }); }}>
                <p className='w-full'>{(comentario.text.length > 20) ? (<>{comentario.text.slice(0, 20)}...</>) : (comentario.text)} </p>
            </div>
        </div>
    )
}

export default CommentNotAuthor