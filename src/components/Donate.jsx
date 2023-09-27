import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Donate = () => {
    let dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState([])
    const token = useSelector((state) => state.profile.token)

    return (
        <div className='h-screen w-screen bg-slate-100 flex flex-col justify-center items-center md:flex-row'>
            <div className='text-center md:h-2/3 md:flex md:flex-col md:items-center md:w-1/2 md:me-10'>
                <button
                    onClick={async () => {
                    try {
                        const response = await axios.post('http://localhost:4000/donate/create-order1')
                        console.log(response)
                        const data = await response.data
                        console.log(data)  
                        window.location.href = data.init_point                
                    } catch (error) {
                        console.log(error)
                    }
                    }}
                    className='flex w-5/6 gap-1 justify-center items-center px-20 py-1 bg-gradient-to-r from-[#4338CA] to-[#5E52F3] rounded-3xl text-white'
                >
                    Donate $2.500CLP
                    <img
                        className='h-3'
                        src="../images/Union.png"
                        alt=""
                    />
                </button>
            </div>
            <div className='text-center md:h-2/3 md:flex md:flex-col md:items-center md:w-1/2 md:me-10'>
                <button
                    onClick={async () => {
                    try {
                        const response = await axios.post('http://localhost:4000/donate/create-order2')
                        console.log(response)
                        const data = await response.data
                        console.log(data)  
                        window.location.href = data.init_point                
                    } catch (error) {
                        console.log(error)
                    }
                    }}
                    className='flex w-5/6 gap-1 justify-center items-center px-20 py-1 bg-gradient-to-r from-[#4338CA] to-[#5E52F3] rounded-3xl text-white'
                >
                    Donate $12.500CLP
                    <img
                        className='h-3'
                        src="../images/Union.png"
                        alt=""
                    />
                </button>
            </div>
            <div className='text-center md:h-2/3 md:flex md:flex-col md:items-center md:w-1/2 md:me-10'>
                <button
                    onClick={async () => {
                    try {
                        const response = await axios.post('http://localhost:4000/donate/create-order3')
                        console.log(response)
                        const data = await response.data
                        console.log(data)  
                        window.location.href = data.init_point                
                    } catch (error) {
                        console.log(error)
                    }
                    }}
                    className='flex w-5/6 gap-1 justify-center items-center px-20 py-1 bg-gradient-to-r from-[#4338CA] to-[#5E52F3] rounded-3xl text-white'
                >
                    Donate $25.000CLP
                    <img
                        className='h-3'
                        src="../images/Union.png"
                        alt=""
                    />
                </button>
            </div>
            {show && <Alert show={show} message={message} setShow={setShow} />}
        </div>
    )
}

export default Donate