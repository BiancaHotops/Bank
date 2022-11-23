import React from "react";
import '../styles/aplication.css'



const Aplication = () => {
    return (
        <>
            <div class="hero photo-3 parallax" id="app">
                {/* <div className="bg-cover bg-center w-full h-screen relative bg-[url('./assets/app.png')] z-auto"> */}
                <div className="px-1 mx-auto max-w-2xl absolute lg:top-1/4  left-5 text-xl sm:left-10 sm:text-5xl w-5/6 top-12 left-7  space-y-5">
                    {/* <h1 className="rounded box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 px-2 text-white text-4xl p-3 font-display justify-center inline-block">Acesse também pelo APP HBANK</h1> */}
                </div>
                <div className="px-1 mx-auto lg:w-1/4 absolute lg:right lg:mr-16 text-xl lg:top-2/3 sm:right-10 sm:text-4xl right-7 top-3/4 mt-20 w-5/6 space-y-5">
                    {/* <p className="rounded box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 px-2 text-white text-3xl p-2 font-display justify-center inline-block">Abra sua conta de onde estiver e já comece a usar!</p> */}
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default Aplication;