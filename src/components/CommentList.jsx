import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import inputActions from '../redux/actions/commentsActions'
import CommentOfComment from './CommentOfComment'
import cleanAction from '../redux/actions/clean'
import Toast, { Toaster, toast } from 'react-hot-toast'
import CommentAuthor from './commentAuthor'
import CommentNotAuthor from './CommentNotAuthor'
import EditComment from './EditComment'
import DeleteComment from './DeleteComment'


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
    const [deleteC, setDeleteC] = useState(false)
    const [alert,setAlert]=useState()

    function clean() {
        dispatch(cleanAction())
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
            chapter_id: chapter_id,
            text: thisComment.text,
        }
        dispatch(updateComment({ datos, id }))
    }

    useEffect(() => {
        readAllComments()
        setRenderizar(false)
    }, [renderizar, chapter_id, show == true])


    useEffect(() => {
            if (commentsStore.message==="Comment posted" && commentsStore.error===null) {
                toast.success("Comment Created")
                inputText.value = ""
                clean()
            }else if (commentsStore.message==="updated" && commentsStore.error===null) {
                Toast.success('Sucessfully changed')
                setEdit(false)
                clean()
            }
    
        if (commentsStore.error !== null) {
            toast.error(commentsStore.error)
            clean()
        } else {
            setShow(false)
        }

        
    }, [commentsStore.error,commentsStore.message,renderizar])



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
                            (<CommentAuthor setThisComment={setThisComment} thisComment={thisComment} comentario={comentario} setCommentOpen={setCommentOpen} commentOpen={commentOpen} setEdit={setEdit} setDeleteC={setDeleteC} />)
                            :
                            (<CommentNotAuthor comentario={comentario} commentOpen={commentOpen} setCommentOpen={setCommentOpen} setThisComment={setThisComment} thisComment={thisComment} />)
                        }

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
                <input id='inputText' ref={commentText} className='w-5/6 h-10 p-2 rounded-lg b focus:outline-none' type="text" placeholder='Say something here' />
                <button onClick={() => { 
                    createOneComment();setRenderizar(true)}}><img src="../../public/images/sendComment.svg" className='absolute bottom-2 right-4 w-5' alt="" /></button>
            </div>
            {commentOpen && (<CommentOfComment datos={thisComment} commentOpen={commentOpen} setCommentOpen={setCommentOpen} />)}
            <Toaster 
            position='top-center'
            toastOptions={{
                duration:3000,
            error: {
                duration:2000,
            },
            success:{
                duration:2000
            },
        }}
            />
            {deleteC && <DeleteComment deleteOneComment={deleteOneComment} thisComment={thisComment} setDeleteC={setDeleteC} setRenderizar={setRenderizar} Toast={Toast} />}
            {edit && <EditComment thisComment={thisComment} setThisComment={setThisComment} setEdit={setEdit} setRenderizar={setRenderizar} updateOneComment={updateOneComment}/>}

        </div>
    )
}

export default CommentList