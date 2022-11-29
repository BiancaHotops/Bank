import React from 'react'
import img from '../assets/cardlo.png'
import '../styles/card.css'
import {Link} from "react-router-dom" 


const Card = () => {
    return (
        <div className="bg-cover bg-center w-full h-screen relative  bg-[url('./assets/fundin.png')] z-auto" id='card'>
            <div className='w-full h-screen absolute object-cover mix-blend-overlay'></div>
            <div className='grid md:grid-cols-2 max-w-[1500px] m-auto' id='#Card'>
                <div className='flex flex-col justify-center md:items-start w-full px-5 sm:mt-4'>
                    <div className="tituloo lg:mt-0 mt-14 ">
                        <h2>Hbank Active Cash® Card</h2>
                    </div>
                    <div className='lg:mt-48 mt-0 '>
                        <img src={img} className='lg:ml-5 mt-10 ' />
                    </div>
                </div>
                <div className='lg:mt-40 mt-0 lg:p-0 lg:w-3/4 w-96 justify-center flex items-center lg:ml-44 p-4'>
                    <div className="textos">
                        <h2 >Several card templates for you to choose from and use however and wherever you want. Learn more by clicking the button below</h2>
                        <div className='lg:ml-52 lg:mt-5 ml-28 mt-2'>
                        <Link to='/sign_up'><button type="button" className='relative z-50 px-6 py-2 transition-colors duration-500 text-white bg-rose-600 border-rose-600 border-2  hover:border-purple-600 hover:bg-purple-600 rounded-lg shadow-xl'>See More</button></Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Card