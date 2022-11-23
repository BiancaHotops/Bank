import React, { useState } from "react"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenu } from 'react-icons/hi'
import LogoImg from '../assets/logo2.png'
import '../styles/underlinelogged.css'


const NavBarLogged = () => {

    // change nav color when scrolling

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >=90){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }


    return (
            <div className={color ? 'transition-colors duration-300 bg-gray-800 flex w-full justify-between items-center h-20 fixed px-4 z-10 ' : 'flex w-full justify-between items-center h-20 fixed px-4 z-10 text-white bg-gray-800' }>
                <div className={logo ? 'hidden' : 'block lg:mt-0 mt-6'}>
                    <img src={LogoImg} className="w-10" />
                </div>
                
                    <ul className='hidden md:flex space-x-10 text-lg'>
                        <li className="line"><a href="#">HOME</a></li>
                        <li className="line"><a href="#">SERVICES</a></li>
                        <li className="line">CARDS</li>
                        <li className="line">APP</li>
                        <li className="line">ABOUT</li>
                    </ul>
                    <div className='hidden md:flex'>
                    <Link to='/default'><button class="px-6 py-2 text-white hover:text-white transition-colors duration-500 border-2 rounded-lg shadow-xl  border-white hover:bg-rose-500 mr-3">GO OUT</button></Link>
                       
                    </div>

                    {/*  Hamburguer */}
                    <div onClick={handleNav} className='md:hidden z-10 absolute right-5 mt-5'>
                    {nav ? <AiOutlineClose size={26} className='text-white' /> : <HiOutlineMenu size={35} className='text-white' />}
                    </div>

                    {/* Mobile menu dropdown */}
                    <div onClick={handleNav} className={nav ? 'h-screen absolute text-white left-0 top-0 w-full bg-black px-7 flex flex-col items-center justify-center text-center' : 'absolute left-[-100%]'}>
                        <ul>
                            <li className='border-b hover:text-pink-700 duration-500'>HOME</li>
                            <li className='border-b hover:text-pink-700 duration-500'>SERVICES</li>
                            <li className='border-b hover:text-pink-700 duration-500'>CARDS</li>
                            <li className='border-b hover:text-pink-700 duration-500'>APP</li>
                            <li className='border-b hover:text-pink-700 duration-500'>ABOUT</li>
                            <li className='border-b hover:text-pink-700 duration-500'>ABOUT</li>
                            <div className='flex flex-col'>
                               
                                <button className=' my-4 px-6 py-2 text-rose-600 hover:text-white transition-colors duration-300 rounded-lg border-2 border-rose-600 hover:bg-rose-600 rounded-lg shadow-xl'>GO OUT</button>

                            </div>
                        </ul>
                    </div>
            </div>

)

}

export default NavBarLogged
