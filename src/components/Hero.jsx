import React from "react";
import '../styles/onda_main.css'

const Hero = () => {
    return (
        <>
            <div className="bg-cover bg-center w-full h-screen relative  bg-[url('./assets/teste.jpg')] z-auto">
                <div className="px-1 lg:top-2/4 mx-auto max-w-3xl absolute  left-5 text-xl text-5xl sm:left-10 space-y-5 top-2/3">
                    <h1 className="rounded box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white lg:text-6xl lg:px-6 lg:w-1/2 sm:w-3/4 mt-20 p-2 text-5xl font-display justify-center inline-block ">HBANK</h1>
                    <p className="rounded box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 lg:text-4xl text-white lg:w-full w-3/4 p-2 text-3xl">The bank for your business.</p>
                </div>
            </div>
            <div class="custom-shape-divider-bottom-1667418352">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>


        </>
    );
};

export default Hero;