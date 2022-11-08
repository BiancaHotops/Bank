import React from "react";
import '../styles/about.css'

const About = () => {
    return (
        <>
            <div class="hero photo-3 parallax">
                <div className="px-1 lg:top-1/4 mx-auto max-w-3xl absolute  left-5 text-xl text-5xl sm:left-10 space-y-5 top-1/5">
                    <h1 className="rounded box-decoration-clone  bg-gradient-to-r from-purple-800 to-rose-500 text-white lg:text-6xl lg:px-6 lg:w-2/1 sm:w2/1 mt-10 p-2 text-5xl font-display justify-center inline-block ">About Us</h1>
                    <p className="rounded box-decoration-clone text-center lg:text-3xl text-white lg:w-full p-2 text-2xl">"Somos a empresa de gestão de recursos de terceiros do banco BV. Atuamos no mercado brasileiro desde 1999 e estamos entre as maiores gestoras do mercado brasileiro segundo ranking da Associação Brasileira das Entidades dos Mercados Financeiros e de Capitais (ANBIMA)."
                    </p>
                </div>
            </div>
            
           


        </>
    );
};

export default About;