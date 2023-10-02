import React from 'react'

const CommentAuthor = ({ setThisComment, thisComment, comentario, commentOpen, setCommentOpen, setEdit, setDeleteC }) => {
    return (<>
        <div className='flex justify-between w-full p-1'>
            <div className='flex gap-3'>
                <div onClick={() => { setThisComment({ ...thisComment, _id: comentario._id, text: comentario.text }); setEdit(true) }} className='cursor-pointer flex gap-2 items-center px-1 rounded border-2'>
                    <p className='text-[#0079FF]'>Edit</p>
                    <img src="../../public/images/updateComment.png" alt="" className='w-4' />
                </div>
                <button onClick={() => {
                    setThisComment({ ...thisComment, _id: comentario._id }); setDeleteC(true)
                }} className='border bg-[#FEF1EF] px-2 rounded'><img src="../../public/images/deleteComment.png" className='w-4' alt="" /></button>
            </div>
            <img src={comentario.user_id.photo} className='w-8 h-8 rounded-full object-center' alt="" />
        </div>
        <div className='h-fit px-1 py-1 lg:pb-5 min-[320px]:pb-2 cursor-pointer' onClick={() => { if (!commentOpen) { setCommentOpen(!commentOpen) }; setThisComment({ ...thisComment, createdAt: comentario.createdAt, text: comentario.text, user_id: comentario.user_id._id }); }}>
            <h2 className='font-bold'>{comentario.user_id.email}</h2>
            <p className='w-full'>{(comentario.text.length > 20) ? (<>{comentario.text.slice(0, 20)}...</>) : (comentario.text)}</p>
        </div>
    </>
    )
}

export default CommentAuthor