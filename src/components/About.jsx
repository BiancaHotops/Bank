import React from "react";
import '../styles/about.css'

const About = () => {
    return (
        <>
            <div class="hero photo-3 parallax">
            <div className="px-1 mx-auto max-w-2xl absolute lg:bottom-2/4 ml-36 text-xl sm:left-10 sm:text-4xl w-5/6 top-12 left-7 space-y-5 pt-48 ">
                <span className='bg-gradient-to-r from-purple-800 to-rose-500 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-black relative inline-block text-center items-center hover:scale-105 transition duration-300 ease-in-out'>
                    <span className='relative text-white text-6xl cursor-default '>About us</span>
                </span>
            </div> 
                    <p className="about rounded box-decoration-clone text-center lg:text-3xl text-white lg:w-full p-2 text-2xl">"Somos a empresa de gestão de recursos de terceiros do banco BV. Atuamos no mercado brasileiro desde 1999 e estamos entre as maiores gestoras do mercado brasileiro segundo ranking da Associação Brasileira das Entidades dos Mercados Financeiros e de Capitais (ANBIMA)."
                    </p>
                </div>
           
            
           


        </>
    );
};

export default About;