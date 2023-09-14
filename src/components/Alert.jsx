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
              <h1 className='min-h-2/3 w-full text-center border-b-2 rounded-t-lg text-black'>
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