import React from "react";
import '../styles/onda_main.css'

const HeroLogged = () => {
    return (
        <>
            <div className="bg-cover bg-center w-full h-screen relative bg-[url('./assets/img1.jpg')] z-auto">
                <div className="px-1 lg:top-2/4 mx-auto max-w-3xl absolute  left-5 text-xl text-5xl sm:left-10 space-y-5 top-2/3">
                    <h1 className="rounded box-decoration-clone lg:bg-gradient-to-r lg:from-rose-800 lg:to-rose-500 text-white lg:text-6xl lg:ml-0 ml-4 lg:px-6 lg:w-[780px] w-[310px] mt-10 lg:p-4 p-2 text-5xl font-display justify-center inline-block bg-gradient-to-r from-rose-800 to-rose-500">Welcome to your profile!</h1>
                    <p className="rounded box-decoration-clone lg:bg-gradient-to-r lg:from-rose-800 lg:to-rose-500 lg:text-4xl text-white lg:ml-0 ml-7 lg:w-2/3 w-3/4 p-2 text-3xl bg-gradient-to-r from-rose-800 to-rose-500 ">The bank for your business</p>
                </div>
            </div>
           


        </>
    );
};

export default HeroLogged;