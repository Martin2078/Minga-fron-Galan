import React from 'react';

const Alert = ({ show, setShow, message, data,classes }) => {
  return (
    <div className={`flex h-screen justify-center items-center absolute ${classes}`}>
      <div className='min-h-32 w-64 bg-white flex flex-col items-center justify-center rounded-lg'>
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
        <button onClick={() => setShow(!show)} className='h-1/3 w-full rounded-b-lg text-blue-500'>
          Accept
        </button>
      </div>
    </div>
  );
};

export default Alert;
