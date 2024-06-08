import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import logo from './images/logo.png'

function Navbar() {

    let [menu, setmenu] = useState(false);

    let toogle = () => {
        setmenu(!menu);
    }

    return (
        <>
            {/* Mobile view */}
            <div className={menu ? 'h-screen w-full bg-[#743e2ef5] p-5 fixed z-10' : 'hidden'}>
                <IoClose onClick={toogle} color="white" className='float-right lg:hidden h-10 w-10' />
                <ul className='text-xl flex flex-col mt-16 items-center w-full font-bold text-white '>
                    <a href="#home" className='w-full'>
                        <li className='px-4 hover:text-[#e9bbb0ee] mt-5  text-center py-3' onClick={toogle}>
                            Home
                        </li>
                    </a>
                    <a href="#about" className='w-full'>
                        <li className='px-4 hover:text-[#e9bbb0ee] mt-5  text-center py-3' onClick={toogle}>
                            About
                        </li>
                    </a>
                    <a href="#gallery" className='w-full'>
                        <li className='px-4 hover:text-[#e9bbb0ee] mt-5  text-center py-3' onClick={toogle}>
                            Gallery
                        </li>
                    </a>
                    <a href="#contact" className='w-full'>
                        <li className='px-4 hover:text-[#e9bbb0ee] mt-5  text-center py-3' onClick={toogle}>
                            Contact us
                        </li>
                    </a>
                </ul>
            </div>

            <div className='m-0 flex justify-between items-center py-2 w-full bg-[#743e2e]'>
                <img src={logo} alt='logo' className='h-20 md:text-2xl p-2 px-4' id='home' />
                <IoMenu onClick={toogle} color="white" className='float-right lg:hidden mr-2 h-9 w-9' />
                <ul className='lg:flex text-xl justify-center items-center font-bold hidden p-2 text-white'>
                    <li className='px-4 hover:text-[#e9bbb0ee] transition-all duration-300'>
                        <a href="#home">Home</a>
                    </li>
                    <li className='px-4 hover:text-[#e9bbb0ee] transition-all duration-300'>
                        <a href="#about">About</a>
                    </li>
                    <li className='px-4 hover:text-[#e9bbb0ee] transition-all duration-300'>
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li className='px-4 hover:text-[#e9bbb0ee] transition-all duration-300'>
                        <a href="#contact">Contact us</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar
