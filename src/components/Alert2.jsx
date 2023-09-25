import React, { useRef } from 'react';

const Alert = ({ show, setShow, message, handleDelete, mangaId }) => {

  const containerRef = useRef(null)

  function handleAccept(id) {
    handleDelete(id)
    setShow(!show)
  }
  return (
    <div
      className={`${
        show ? 'block' : 'hidden'
      } fixed top-0 left-0 w-full h-full flex justify-center items-center`}
    >
      <div
        ref={containerRef}
        className="relative min-h-32 w-64 bg-white flex flex-col items-center justify-center rounded-lg"
      >
        {Array.isArray(message) ? (
          message.map((errorMessage) => (
            <h1
              key={errorMessage}
              className='min-h-2/3 w-full text-center border-b-2 rounded-t-lg'
            >
              {errorMessage}
            </h1>
          ))
        ) : (
          <h1 className='min-h-2/3 w-full text-center border-b-2 rounded-t-lg text-black'>
            {message}
          </h1>
        )}
        <button onClick={() => handleAccept(mangaId)} className='h-1/3 w-full rounded-b-lg text-blue-500'>
          Accept
        </button>
        <button onClick={() => setShow(!show)} className='h-1/3 w-full rounded-b-lg text-blue-500'>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Alert;
