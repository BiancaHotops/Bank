import React, { useState } from "react"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenu } from 'react-icons/hi'
import LogoImg from '../assets/logo2.png'
import '../styles/underline.css'


const NavBar = () => {

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
            <div className={color ? 'transition-colors duration-300 bg-black/90 flex w-full justify-between items-center h-20 fixed px-4 z-10 text-white' : 'flex w-full justify-between items-center h-20 fixed px-4 z-10 text-white' }>
                <div className={logo ? 'hidden' : 'block lg:mt-0 mt-6'}>
                    <img src={LogoImg} className="w-10" />
                </div>
                
                    <ul className='hidden md:flex space-x-10 text-lg'>
                        <li className="link">HOME</li>
                        <li className="link">SERVICES</li>
                        <li className="link">CARDS</li>
                        <li className="link">APP</li>
                        <li className="link">ABOUT</li>
                    </ul>
                    <div className='hidden md:flex'>
                        <Link to='/sign_in'><button class="px-6 py-2 text-white hover:text-white transition-colors duration-500 border-2 rounded-lg shadow-xl  border-white hover:bg-purple-600 mr-3">SIGN IN</button></Link>
                        <Link to='/sign_up'><button class="px-6 py-2 text-white hover:text-white transition-colors duration-500 border-2 rounded-lg shadow-xl  border-white hover:bg-rose-600">SIGN UP</button></Link>
                    </div>

                    {/*  Hamburguer */}
                    <div onClick={handleNav} className='md:hidden z-10 absolute right-5 mt-5'>
                        {nav ? <AiOutlineClose size={26} /> : <HiOutlineMenu size={35} />}
                    </div>

                    {/* Mobile menu dropdown */}
                    <div onClick={handleNav} className={nav ? 'h-screen absolute text-white left-0 top-0 w-full bg-black px-7 flex flex-col items-center justify-center text-center' : 'absolute left-[-100%]'}>
                        <ul>
                            <li className='border-b hover:text-pink-700 duration-500'>HOME</li>
                            <li className='border-b hover:text-pink-700 duration-500'>SERVICES</li>
                            <li className='border-b hover:text-pink-700 duration-500'>CARDS</li>
                            <li className='border-b hover:text-pink-700 duration-500'>APP</li>
                            <li className='border-b hover:text-pink-700 duration-500'>ABOUT</li>
                            <div className='flex flex-col'>
                                <button className=' my-4 px-6 py-2 text-purple-600 hover:text-white transition-colors duration-300 rounded-lg border-2 border-purple-600 hover:bg-purple-600 rounded-lg shadow-xl'>SIGN IN</button>
                                <button className=' my-4 px-6 py-2 text-rose-600 hover:text-white transition-colors duration-300 rounded-lg border-2 border-rose-600 hover:bg-rose-600 rounded-lg shadow-xl'>SIGN UP</button>

                            </div>
                        </ul>
                    </div>
            </div>

            

    )

}

export default NavBar