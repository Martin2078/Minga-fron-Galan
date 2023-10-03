import React from 'react'

const Comment = ({ datos, commentOpen, setCommentOpen }) => {
    return (
        <div className='bg-[#4338CA] lg:rounded-xl fixed lg:left-1/4 top-0 flex flex-col items-center h-full lg:w-3/6 min-[320px]:w-full gap-3 py-3 px-4'>
            <div className='p-2 w-full flex items-center justify-center rounded-xl bg-[#FEF1EF]'>
                <button onClick={() => setCommentOpen(!commentOpen)}><img onClick={()=>setCommentOpen(!commentOpen)} src="../../public/images/cruz.png" className='w-5' alt="" /></button>
            </div>
            <div className='bg-white min-h-fit w-full rounded-xl border-2 border-[#666] p-1 flex flex-col items-center'>
                <div className='flex items-center gap-2'>
                    <img src={datos.user_id.photo} className='w-8 rounded-full object-cover' alt="" />
                    <h2>{datos.user_id.email}</h2>
                </div>
                <div className='w-full h-fit'>
                <p className=' h-fit w-full'>
                    {datos.text}
                    </p>
                </div>
                <div className='w-full h-fit text-center text-xs text-[#666]'>
                    {datos.createdAt}
                </div>
            </div>
        </div>
    )
}

export default Comment