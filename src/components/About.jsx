import React from "react";
import '../styles/about.css'

const About = () => {
    return (
        <>
            <div className="bg-cover lg:bg-center w-full h-screen flex items-center justify-center relative  bg-[url('./assets/about4.png')] z-auto bg-[left_-23rem_top_0rem]" id="about">
                <div className="px-1 mx-auto max-w-2xl absolute lg:bottom-2/4 lg:ml-44 text-xl sm:left-10 sm:text-4xl w-5/6 lg:top-20 left-7 space-y-5 pt-48 top-[-50px] ml-12 ">
                    <span className='bottom-20 bg-gradient-to-r from-purple-800 to-rose-500 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-black relative inline-block text-center items-center hover:scale-105 transition duration-300 ease-in-out'>
                        <span className='relative text-white lg:text-6xl cursor-default text-5xl '>About Us</span>
                    </span>
                </div>
                <p className="lg:p-14 lg:mt-20 about rounded box-decoration-clone text-center lg:text-4xl text-white lg:w-5/6 p-5 text-2xl ">
                    We are a financial company with the objective of guaranteeing innovative solutions that meet the needs of our clients in all segments in which we operate: loans, financing and various services.
                </p>
            </div>





        </>
    );
};

export default About;