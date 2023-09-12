import React from 'react'
function signIn() {
  return (
    <div className='w-full h-full flex'>
      <img className='w-3/6 h-screen lg:block min-[320px]:hidden' src="../../public/images/backgroudn-signIn.png" alt="" />
      <div className='flex justify-center items-center bg-white lg:w-3/6 min-[320px]:w-full h-screen'>
        <div className='lg:w-4/6 min-[320px]:w-full h-4/6 flex flex-col gap-6'>
          <div className='flex flex-col items-center gap-2'>
            <img src="../../public/images/logo-junto.svg" alt="" />
            <h1 className='text-4xl font-semibold flex'>Welcome <p className=' ml-3 text-[#4338CA]'>back</p>!</h1>
            <p className='text-center lg:w-9/12 min-[320px]:w-10/12 text-xs'>Discover manga, manhua and manhwa, track your progress, have fun, read manga. </p>
          </div>
          <div className='flex flex-col items-center justify-center gap-5'>
            <div className='w-5/6'>
              <p className='text-[#4338CA] text-xs ml-4 translate-y-2 inline-block bg-white'>Email</p>
              <div className='border border-[#999] rounded-xl pl-4 pr-2 flex justify-between items-center'>
                <input className='w-full h-10 ' type="email"/>
                <p className='text-[#4338CA] text-base relative'>@</p>
              </div>
            </div>
            <div className='w-5/6'>
              <p className='text-[#4338CA] text-xs ml-4 translate-y-2 inline-block bg-white'>Password</p>
              <input className='w-full h-10 border border-[#999] active:border-hidden rounded-xl px-4 py-1' type="password" />
            </div>


            <button className='w-5/6 h-11 rounded-xl px-2 py-2 bg-[#4338CA] text-white text-sm' >Sign In</button>
            <button className='w-5/6 h-11 rounded-xl px-2 py-2 flex justify-center border border-[#999]'>
              <img src="../../public/images/Google.png" alt="" /><p className='text-[#666] pl-3'>Sign in with Google</p>
            </button>
            <p>you don't have an account yet? <button className='text-[#4338CA] font-semibold'>Sign Up</button>
            </p>
            <p>Go back to <button className='text-[#4338CA] font-semibold'>home Page</button>
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default signIn