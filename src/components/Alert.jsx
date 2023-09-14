const Alert = ({ show, setShow, message, data }) => {
  return (
    <div className='flex h-screen justify-center items-center absolute'>
      <div className='min-h-32 w-64 bg-white flex flex-col items-center justify-center rounded-lg'>
        {(message && message.length > 0) ? (
          message.map((errorMessage, index) => (
            <>
                <h1
                  className='min-h-2/3 w-full text-center border-b-2 rounded-t-lg'
                >
                  {errorMessage}
                </h1>
            </>
          ))
        ) : (
          data && data.message ? (
            <h1 className='min-h-2/3 w-full text-center border-b-2 rounded-t-lg'>
              {data.message}
            </h1>
          ) : null
        )}
        <button onClick={() => setShow(!show)} className='h-1/3 w-full rounded-b-lg text-blue-500'>
          Accept
        </button>
      </div>
    </div>
  );
};

export default Alert;





// import React from 'react';

// const Alert = ({ show, setShow, message, data }) => {
//   return (
//     <div className='flex h-screen justify-center items-center absolute'>
//       <div className='min-h-32 w-64 bg-white flex flex-col items-center justify-center rounded-lg'>
//         {message && message.length > 0 ? (
//           message.map((errorMessage, index) => (
//             <h1
//               key={index}
//               className='min-h-2/3 w-full text-center border-b-2 rounded-t-lg'
//             >
//               {errorMessage}
//             </h1>
//           ))
//         ) : data && data.message ? ( // Mostrar mensajes de éxito si hay un mensaje en la respuesta
//           <h1 className='min-h-2/3 w-full text-center border-b-2 rounded-t-lg'>
//             {data.message}
//           </h1>
//         ) : null}
//         <button onClick={() => setShow(!show)} className='h-1/3 w-full rounded-b-lg text-blue-500'>
//           Accept
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Alert;




























// // // import React from 'react'

// // // const Alert = ({show, setShow, message}) => {
// // //   return (
// // //     <div className='flex h-screen justify-center items-center absolute'>
// // //       <div className='h-32 w-64 bg-white flex flex-col items-center justify-center rounded-lg'>
// // //         {message.map((messages) => {`<h1 className='h-2/3 w-full text-center pt-5 border-b-2 rounded-t-lg'>${messages}</h1>`})}
// // //         <button onClick={()=>setShow(!show)} className='h-1/3 w-full rounded-b-lg text-blue-500'>Accept</button>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default Alert


/*<h1 className='h-2/3 w-full text-center pt-5 border-b-2 rounded-t-lg'>{message}</h1>*/

/*import React from 'react';

const Alert = ({ show, setShow, messages }) => {
  return (
    show && (
      <div className='flex h-screen justify-center items-center absolute'>
        <div className='h-32 w-64 bg-white flex flex-col items-center justify-center rounded-lg'>
          <h1 className='h-2/3 w-full text-center pt-5 border-b-2 rounded-t-lg'>
            {messages.join('\n')} {/ Unir los mensajes en un solo string /}
            </h1>
            <button onClick={() => setShow(!show)} className='h-1/3 w-full rounded-b-lg text-blue-500'>
              Accept
            </button>
          </div>
        </div>
      )
    );
  };
  
  export default Alert; */