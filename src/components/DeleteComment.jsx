import React from 'react'

const DeleteComment = ({deleteOneComment,thisComment,setRenderizar,setDeleteC,Toast}) => {
    return (
        <div className={`border-2 border-black bg-white lg:w-2/6 min-[320px]:w-5/6 h-40 flex flex-col items-center justify-evenly fixed top-0 lg:left-[30%]`}>
            <div>
                <p className='text-center text-lg font-bold'>You will delete this comment permanently...<br /> Are you sure?</p>
            </div>
            <div className='flex gap-4'>
                <button onClick={() => { deleteOneComment(thisComment._id); setRenderizar(true); setDeleteC(false); Toast.success("Comment Succesfully eliminated") }} className='border border-green-700 bg-green-500 w-12 text-white h-8 rounded-full'>yes</button>
                <button onClick={() => { setDeleteC(false) }} className='border border-red-700 bg-red-600 w-12 h-8 text-white rounded-full'>no</button>
            </div>
        </div>
    )
}

export default DeleteComment