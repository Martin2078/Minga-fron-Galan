import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import inputActions from '../redux/actions/commentsActions'
import CommentOfComment from './CommentOfComment'
import Alert from './Alert'
import cleanError from '../redux/actions/cleanError'
import Toast, { Toaster, toast } from 'react-hot-toast'
const CommentList = ({ open, setOpen, chapter_id, chapterName }) => {
    const commentText = useRef()
    const { user, token } = useSelector((store) => store.profile)
    const dispatch = useDispatch()
    const readComments = inputActions.readComments
    const deleteComment = inputActions.deleteComments
    const updateComment = inputActions.updateComments
    const createComment = inputActions.createComment
    let commentsStore = useSelector((store) => store.comments)
    const [show, setShow] = useState(false)
    const [thisComment, setThisComment] = useState({})
    const [commentOpen, setCommentOpen] = useState(false)
    const [renderizar, setRenderizar] = useState(false)
    const [edit, setEdit] = useState()
    const [deleteC,setDeleteC]=useState(false)

    function closeAlert(show) {
        setShow(!show)
        dispatch(cleanError())
    }
    function createOneComment() {
        const datos = {
            chapter_id: chapter_id,
            text: commentText.current.value,
        }
        dispatch(createComment(datos))
    }
    function deleteOneComment(id) {
        dispatch(deleteComment(id))
    }
    function readAllComments() {
        const datos = {
            chapter_id: chapter_id,
        }
        dispatch(readComments(datos))
    }
    function updateOneComment(id) {
        const datos = {
            chapter_id:chapter_id,
            text:thisComment.text,
        }
        dispatch(updateComment({datos,id}))
    }

    useEffect(() => {
        readAllComments()
        setRenderizar(false)
    }, [renderizar, chapter_id, show == true])


    useEffect(() => {
        if (commentsStore.error !== null) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [commentsStore.error])

    return (
        <div className='lg:w-1/4 min-[320px]:w-full h-full bg-white border border-[#4338CA] fixed lg:right-0 bottom-0 flex flex-col items-center'>
            <div className='flex items-center justify-between w-full h-10 p-6 border-b-2'>
                <h1 className='text-xl font-bold'>{chapterName}</h1>
                <button onClick={() => setOpen(!open)} className=''><img src="../../public/images/cruz.png" className='w-4' alt="" /></button>
            </div>

            <div className='flex flex-col gap-5 w-full h-5/6 p-4 justify-center'>
                {(commentsStore) && commentsStore.loading == true ? (<div className='h-5/6 w-full flex flex-col items-center'><p>Loading...</p><img src="../../public/images/pending.png" className='w-16 object-cover' alt="" /></div>) : null}

                {((commentsStore.comments)?.length > 0) ? (commentsStore.comments.map((comentario) => (
                    <div className='h-36 w-full rounded-xl border-2 border-[#666] pt-1 px-2' key={comentario._id}>
                        {(user._id === comentario.user_id._id) ?
                            (<>
                                <div className='flex justify-between w-full px-1 py-1'>
                                    <div className='flex gap-3'>
                                        <div onClick={() => {setThisComment({ ...thisComment, _id: comentario._id, text: comentario.text });setEdit(true);}} className='cursor-pointer flex gap-2 items-center px-1 rounded border-2'>
                                            <p className='text-[#0079FF]'>Edit</p>
                                            <img src="../../public/images/updateComment.png" alt="" className='w-4' />
                                        </div>
                                        <button onClick={() => {
                                             setThisComment({ ...thisComment, _id: comentario._id });setDeleteC(true)
                                        }} className='border bg-[#FEF1EF] px-2 rounded'><img src="../../public/images/deleteComment.png" className='w-4' alt="" /></button>
                                    </div>
                                    <img src={comentario.user_id.photo} className='w-8 rounded-full object-cover' alt="" />
                                </div>
                                <div className='h-fit px-1 py-1 pb-5 cursor-pointer' onClick={() => { if (!commentOpen) { setCommentOpen(!commentOpen) }; setThisComment({ ...thisComment, createdAt: comentario.createdAt, text: comentario.text, user_id: comentario.user_id }); }}>
                                    <h2 className='font-bold'>{comentario.user_id.email}</h2>
                                    <p className='w-full'>{(comentario.text.length > 20) ? (<>{comentario.text.slice(0, 20)}...</>) : (comentario.text)}</p>
                                </div>
                            </>)
                            :
                            (<div className='flex flex-col w-full h-28 gap-1'>
                                <div className='flex gap-2 items-center'>
                                    <img src={comentario.user_id.photo} className='w-8 rounded-full object-cover' alt="" />
                                    <h2 className='font-bold'>{comentario.user_id.email}</h2>
                                </div>
                                <div className='h-fit px-1 cursor-pointer' onClick={() => { if (!commentOpen) { setCommentOpen(!commentOpen) }; setThisComment({ ...thisComment, createdAt: comentario.createdAt, text: comentario.text, user_id: comentario.user_id }); }}>
                                    <p className='w-full'>{(comentario.text.length > 20) ? (<>{comentario.text.slice(0, 20)}...</>) : (comentario.text)} </p>
                                </div>
                            </div>)}

                        <div className='w-full h-fit p-1 text-center'>
                            <p className='text-[#666] text-xs'>{comentario.createdAt}</p>
                        </div>
                    </div>)))
                    : (commentsStore.loading == false) &&
                    (
                        <div className='w-full h-full flex flex-col items-center text-center justify-center gap-10'>
                            <p className='text-xl'>Parece que aun no hay comentarios aqui</p>
                            <img className='rounded-full w-44' src="../../public/images/dekuLlorando.jpeg" alt="" />
                        </div>
                    )}
            </div>
            <div className='absolute bottom-2 w-5/6 h-fit flex border-2 border-[#999] rounded-lg'>
                {show && (<Alert show={show} setShow={closeAlert} message={commentsStore.error} classes={'-bottom-[22rem]'} />)}
                <input id='inputText' ref={commentText} className='w-5/6 h-10 p-2 rounded-lg b focus:outline-none' type="text" placeholder='Say something here' />
                <button onClick={() => { createOneComment(); setRenderizar(true); inputText.value = "" }}><img src="../../public/images/sendComment.svg" className='absolute bottom-2 right-4 w-5' alt="" /></button>
            </div>
            {commentOpen && (<CommentOfComment datos={thisComment} commentOpen={commentOpen} setCommentOpen={setCommentOpen} />)}
            <Toaster position='top-center'/>
            {deleteC && (
                                                <div className={`border-2 border-black bg-white w-2/6 h-40 flex flex-col items-center justify-evenly fixed top-0 left-[30%]`}>
                                                    <div>
                                                        <p className='text-center text-lg font-bold'>You will delete this comment permanently...<br /> Are you sure?</p>
                                                    </div>
                                                    <div className='flex gap-4'>
                                                        <button onClick={() => { deleteOneComment(thisComment._id); setRenderizar(true);setDeleteC(false);Toast.success("Comment Succesfully eliminated") }} className='border border-green-700 bg-green-500 w-12 text-white h-8 rounded-full'>yes</button>
                                                        <button onClick={() => {setDeleteC(false)}} className='border border-red-700 bg-red-600 w-12 h-8 text-white rounded-full'>no</button>
                                                    </div>
                                                </div>)}
            {edit&&(
                                            <div className='w-2/6 py-2 px-5 bg-[#4338CA] h-52 flex flex-col justify-evenly items-center rounded-xl fixed top-0 left-[30%]'>
                                                <h3 className='text-2xl font-bold  rounded-xl p-2 text-white'>Edit Comment</h3>                                    
                                                    <input type="text" defaultValue={thisComment.text}
                                                    onKeyUp={(e)=>setThisComment({...thisComment,text:e.target.value})}
                                                    className='w-full h-20 text-start border-2 focus:outline-none rounded'/>
                                                <div className='flex w-full justify-evenly'>
                                                    <button onClick={()=> {Toast.success('Sucessfully changed');updateOneComment(thisComment._id);setEdit(false);setRenderizar(true)}} className='rounded-full px-3 py-1 bg-green-400 text-white'>Save</button>
                                                    <button onClick={()=> setEdit(false)} className='rounded-full px-3 py-1 bg-red-600 text-white'>Cancel</button>
                                                </div>
                                            </div>
                                        )}

        </div>
    )
}

export default CommentList