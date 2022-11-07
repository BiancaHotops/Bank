import React from "react";

const About = () => {
    return (
        <>
            <div className="bg-cover bg-center w-full h-screen relative  bg-[url('./assets/fundo6.png')] z-auto">
                <div className="px-1 lg:top-2/4 mx-auto max-w-3xl absolute  left-5 text-xl text-5xl sm:left-10 space-y-5 top-2/3">
                    <h1 className="rounded box-decoration-clone lg:bg-gradient-to-r lg:from-purple-800 lg:to-purple-500 text-white lg:text-6xl lg:px-6 lg:w-1/2 sm:w-3/4 mt-10 p-2 text-5xl font-display justify-center inline-block bg-gradient-to-r from-purple-800 to-rose-500">HBANK</h1>
                    <p className="rounded box-decoration-clone lg:bg-gradient-to-r lg:from-purple-800 lg:to-purple-500 lg:text-4xl text-white lg:w-full w-3/4 p-2 text-3xl bg-gradient-to-r from-purple-800 to-rose-500 ">The bank for your business.</p>
                </div>
            </div>


        </>
    );
};

export default About;