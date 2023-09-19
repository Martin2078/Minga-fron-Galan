import React from "react";
import { Link } from "react-router-dom";

const NotAllow = ({ props }) => {
    let mensaje = props;
    return(
        <div className="h-screen w-full flex justify-center bg-[url('../images/desktop-wallpaper-vegeta-iphone.jpg')] bg-cover bg-center "  >
            <div className='mt-16   flex gap-5 mb-8 border-b-8	flex-col justify-center items-center '>

                <div className="text-center">
                    <h2 className="flex justify-center lg:text-4xl min-[320px]:text-xl sm:text-3xl"> {mensaje} </h2>
                </div>
                <Link to={"/signIn"} className='text-center lg:bg-gradient-to-r from-[#4338CA] to-[#5E52F3] lg:rounded text-[#FFFFFF] lg:w-fit font-["Roboto"] lg:py-1.5 lg:px-20 lg:text-2xl min-[320px]:text-2xl min-[320px]:py-2 min-[320px]:w-4/6 min-[320px]:rounded-full min-[320px]:bg-[#4338CA] sm:py-4 sm:text-3xl '>Let's go!</Link>
            </div>
        </div>)
}

export default NotAllow