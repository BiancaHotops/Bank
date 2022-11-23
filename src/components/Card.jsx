import React from 'react'
import img from '../assets/carta.png'
import '../styles/card.css'

const Card = () => {
    return (
        <div className=" bg-cover bg-center w-full h-screen relative  bg-[url('./assets/fundin.png')] z-auto" id='card'>
            <div className='w-full h-screen absolute object-cover mix-blend-overlay'></div>
            <div className='grid md:grid-cols-2 max-w-[1500px] m-auto' id='#Card'>
                <div className='flex flex-col justify-center md:items-start w-full px-5 sm:mt-4'>
                    <div className="tituloo lg:mt-0 mt-20">
                        <h2>Hbank Active Cash® Card</h2>
                    </div>
                    <div className='lg:mt-48 mt-36'>
                    <img src={img} className='lg:ml-5 mt-10' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card