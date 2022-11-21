import React from 'react'
import img from '../assets/cardss.png'
import '../styles/card.css'

const Card = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-between  bg-black' id='Card'>
            <div className='w-full h-screen absolute object-cover mix-blend-overlay'></div>
            <div className='grid md:grid-cols-2 max-w-[1500px] m-auto' id='#Card'>
                <div className='flex flex-col justify-center md:items-start w-full px-4 sm:mt-4'>
                    <div className="tituloo">
                        <h2>Hbank Active Cash® Card</h2>
                    </div>
                    <img src={img} alt="" className='mt-10' />
                </div>
            </div>
        </div>
    )
}
export default Card