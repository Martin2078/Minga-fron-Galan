import React, { useState, useEffect, useRef } from 'react';
import Alert from '../components/Alert';
import axios from 'axios';
import { useSelector } from 'react-redux'
import NotAllow from '../components/NotAllow';
import profile from '../redux/actions/me_authors';
import { useDispatch } from 'react-redux';

const ChapterForm = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState([]);
  const [dataResponse, setDataResponse] = useState(null);
  const token = useSelector((store)=>store.profile.token)
  const dispatch=useDispatch()
  const title = useRef();
  const order = useRef();
  const pages = useRef();

  const handleForm = async () => {
    const inputTitle = title.current.value;
    const inputPages = pages.current.value;
    const inputOrder = order.current.value;
    const newChapterData = {
      manga_id: "64f3aa96d9cc8ec6d82d73e9",
      title: inputTitle,
      order: inputOrder,
      pages: inputPages.split(",")
    };
    if (token) {
      try {
        const { data } = await axios.post("http://localhost:4000/chapters/", newChapterData, {
          headers: {
            Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGYzYTg0YWMwMGU4OWQ0MTI3NWM5M2QiLCJlbWFpbCI6ImlnbmFAbWguY29tLmFyIiwiaWF0IjoxNjk0NjE4Mjk5LCJleHAiOjE2OTQ3MDQ2OTl9.oLO48xhEERMJS2j4d1kp4IXigqNilaHbjUzZ_zn4XYo"
          }
  
        }
  
        );
        setMessage([]); // Limpiar mensajes de error en caso de Ã©xito
        setDataResponse(data); // Almacenar la respuesta en el nuevo estado
      } catch (error) {
        console.error(error);
        setMessage([error.response.data.message]); // Pasar el mensaje de error como un array
        setDataResponse(null); // Limpiar respuesta en caso de error
      }
    }
    
  };

  useEffect(() => {
    if (dataResponse && dataResponse.message || message.length > 0) {
      setShow(true); // Mostrar la alerta si hay un mensaje en la respuesta
    }
    if(!token.length>0){
      if (localStorage.length>0) {
           const tokenLocal=localStorage.getItem('token')
           const userLocal= JSON.parse(localStorage.getItem('user'))
           dispatch(profile({token: tokenLocal,findUser: userLocal}))
         }
       }
  }, [dataResponse, message,token]);

  return (<>
    {token?(<div className='h-screen bg-slate-100 flex flex-col justify-center items-center'>
    <form action="" className='flex flex-col h-2/3 w-2/3 items-center'>
      <label htmlFor="" className='text-2xl pb-5'>New Chapter</label>
      <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2' ref={title} placeholder='  Insert title' />
      <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2' ref={order} placeholder='  Insert order' />
      <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2' ref={pages} placeholder='  Insert pages' />
      <button onClick={(e) => {
        e.preventDefault();
        handleForm();
      }}
        className='bg-indigo-700 text-white font-semibold py-2 px-5 mt-20 rounded-full w-full md:w-1/2'>Send</button>
    </form>
    {show && <Alert show={show} message={message} data={dataResponse} setShow={setShow} />}
  </div>):(<NotAllow props={"Debes iniciar sesion antes de ingresar aqui"}/>)}
  </>
  )
}

export default ChapterForm;




// import React, { useState, useEffect, useRef } from 'react';
// import Alert from '../components/Alert';
// import axios from 'axios';

// const ChapterForm = () => {
//   let [show, setShow] = useState(false);
//   let [message, setMessage] = useState([]);
//   let [dataResponse, setDataResponse] = useState(null); // Nuevo estado para almacenar la respuesta de la solicitud

//   const title = useRef();
//   const order = useRef();
//   const pages = useRef();

//   const handleForm = async () => {
//     let inputTitle = title.current.value;
//     let inputPages = pages.current.value;
//     let inputOrder = order.current.value;
//     let newChapterData = {
//       manga_id: "64f3aa96d9cc8ec6d82d73e9",
//       title: inputTitle,
//       order: inputOrder,
//       pages: [inputPages]
//     };
//     try {
//       let { data } = await axios.post("http://localhost:4000/chapters/", newChapterData, {
//         headers: {
//           Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGYzYTg0YWMwMGU4OWQ0MTI3NWM5M2QiLCJlbWFpbCI6ImlnbmFAbWguY29tLmFyIiwiaWF0IjoxNjk0NjE4Mjk5LCJleHAiOjE2OTQ3MDQ2OTl9.oLO48xhEERMJS2j4d1kp4IXigqNilaHbjUzZ_zn4XYo"
//         }
//       });
//       console.log(data.message);
//       setMessage([])
//       setDataResponse(data); // Almacenar la respuesta en el nuevo estado
//     } catch (error) {
//       console.log(error);
//       console.log(error.response.data.message);
//       setMessage([...message, error.response.data.message]);
//     }
//   };

//   useEffect(() => {
//     if (dataResponse && dataResponse.message) {
//         console.log(dataResponse)
//       setShow(true); // Mostrar la alerta si hay un mensaje en la respuesta
//     }
//   }, [dataResponse]);

//   return (
//     <div className='h-screen bg-slate-100 flex flex-col justify-center items-center'>
//       <form action="" className='flex flex-col h-2/3 w-2/3 items-center'>
//         <label htmlFor="" className='text-2xl pb-5'>New Chapter</label>
//         <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2' ref={title} placeholder='  Insert title' />
//         <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2' ref={order} placeholder='  Insert order' />
//         <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2' ref={pages} placeholder='  Insert pages' />
//         <button onClick={(e) => {
//           e.preventDefault();
//           handleForm();
//         }}
//           className='bg-indigo-700 text-white font-semibold py-2 px-5 mt-20 rounded-full w-full md:w-1/2'>Send</button>
//       </form>
//       {show && <Alert show={show} message={message} data={dataResponse} setShow={setShow} />}
//     </div>
//   );
// }

// export default ChapterForm;






































// // // import React, { useState, useEffect, useRef } from 'react'
// // // import Alert from '../components/Alert'
// // // import axios from 'axios'


// // // const ChapterForm = () => {
// // //   let [show, setShow] = useState(false)
// // //   let [message, setMessage] = useState([])

// // // const title = useRef()
// // // const order = useRef()
// // // const pages = useRef()
// // // const handleForm = async () => {
// // //   let inputTitle = title.current.value
// // //   let inputPages = pages.current.value
// // //   let inputOrder = order.current.value
// // //   let newChapterData = {
// // //     title: inputTitle,
// // //     order: inputOrder,
// // //     pages: inputPages
// // //   }
// // //   let { data } = await axios.post("http://localhost:4000/chapters/", newChapterData)
// // //   console.log(data)
// // //   setMessage(data.response.data.message)
// // // }

// // //   useEffect(() => {

// // //   }, [setShow])

// // //   return (
// // //     <div className='h-screen bg-slate-100 flex flex-col justify-center items-center'>
// // //       <form action="" className='flex flex-col h-2/3 w-2/3 items-center'>
// // //         <label htmlFor="" className='text-2xl pb-5'>New Chapter</label>
// // //         <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2' ref={title} placeholder='  Insert title' />
// // //         <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2' ref={order} placeholder='  Insert order' />
// // //         <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2' ref={pages} placeholder='  Insert pages' />
// // //         <button onClick={(e) => {
// // //           e.preventDefault();
// // //           handleForm();
// // //           setShow(!show)
// // //         }}
// // //           className='bg-indigo-700 text-white font-semibold py-2 px-5 mt-20 rounded-full w-full md:w-1/2'>Send</button>
// // //       </form>
// // //       {show && <Alert show={show} message={message} setShow={setShow} />}
// // //     </div>
// // //   )
// // // }

// // // export default ChapterForm


/*
import React, { useState, useEffect, useRef } from 'react';
import Alert from '../components/Alert';
import axios from 'axios';

const ChapterForm = () => {
  let [show, setShow] = useState(false);
  let [messages, setMessages] = useState({message: []});

  const title = useRef();
  const order = useRef();
  const pages = useRef();

  const handleForm = async () => {
    let inputTitle = title.current.value;
    let inputPages = pages.current.value;
    let inputOrder = order.current.value;
    let newChapterData = {
      title: inputTitle,
      order: inputOrder,
      pages: inputPages,
    };

    try {
      let { data } = await axios.post("http://localhost:4000/chapters/", newChapterData);

      if (data.response && data.response.data) {
        const { message } = data.response.data.message;
        setMessages({ message });
      }

      setShow(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='h-screen bg-slate-100 flex flex-col justify-center items-center'>
      <form action="" className='flex flex-col h-2/3 w-2/3 items-center'>
        <label htmlFor="" className='text-2xl pb-5'>New Chapter</label>
        <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2' ref={title} placeholder='  Insert title' />
        <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2' ref={order} placeholder='  Insert order' />
        <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2' ref={pages} placeholder='  Insert pages' />
        <button onClick={(e) => {
          e.preventDefault();
          handleForm();
        }}
          className='bg-indigo-700 text-white font-semibold py-2 px-5 mt-20 rounded-full w-full md:w-1/2'>Send</button>
      </form>
      {show && <Alert show={show} messages={messages} setShow={setShow} />}
    </div>
  );
};

export default ChapterForm;
*/
