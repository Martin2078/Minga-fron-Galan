import React from 'react'

const EditComment = ({thisComment,setThisComment,setEdit,setRenderizar,updateOneComment}) => {
    return (
        <div className='lg:w-2/6 min-[320px]:w-5/6 py-2 px-5 bg-[#4338CA] h-52 flex flex-col justify-evenly items-center rounded-xl fixed top-0 lg:left-[30%]'>
            <h3 className='text-2xl font-bold  rounded-xl p-2 text-white'>Edit Comment</h3>
            <input type="text" defaultValue={thisComment.text}
                onKeyUp={(e) => setThisComment({ ...thisComment, text: e.target.value })}
                className='w-full h-20 text-start border-2 focus:outline-none rounded' />
            <div className='flex w-full justify-evenly'>
                <button onClick={() => {updateOneComment(thisComment._id);setRenderizar(true);}} className='rounded-full px-3 py-1 bg-green-400 text-white'>Save</button>
                    
                <button onClick={() => setEdit(false)} className='rounded-full px-3 py-1 bg-red-600 text-white'>Cancel</button>
            </div>
        </div>
    )
}

export default EditComment