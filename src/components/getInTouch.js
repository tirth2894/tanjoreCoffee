import React from 'react'
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";


function GetInTouch() {
    return (
        <div className="py-6 w-full text-white pb-0" id='contact'>

            <div className="grid sm:grid-cols-2 items-center gap-16 px-4 py-8 bg-[#743e2e] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <Slide direction="up" >

                    <div>
                        <h1 className="text-3xl font-semibold">Get In Touch</h1>
                        <div className="mt-12">
                            <h2 className="text-lg font-semibold">Contact</h2>
                            <ul className="mt-3">
                                <li className="flex items-center my-2">
                                    <a href="mailto:tirthptl2894@gmail.com" rel="noopener noreferrer" target='_blank'>
                                        <div className="bg-[#743e2e] h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-white hover:text-[#b72860] transition-all">
                                            <FaMapMarkerAlt className='w-6 h-6' />
                                        </div>
                                    </a>
                                    <div className='ml-2'>
                                        <p className='font-semibold'>364,37th street TVS Avenue , Anna Nagar West Extn., Chennai - 600101.</p>
                                    </div>
                                </li>
                                <li className="flex items-center my-2">
                                    <a href="mailto:tirthptl2894@gmail.com" rel="noopener noreferrer" target='_blank'>
                                        <div className="bg-[#743e2e] h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-white hover:text-[#b72860] transition-all">
                                            <IoMdMail className='w-6 h-6' />
                                        </div>
                                    </a>
                                    <div className='ml-2'>
                                        <p className='font-semibold'>tanjoredegreecoffee@yahoo.in</p>
                                    </div>
                                </li>
                                <li className="flex items-center my-2">
                                    <a href="tel:+919003106755" rel="noopener noreferrer" target='_blank'>
                                        <div className="bg-[#743e2e] h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-white hover:text-[#b72860] transition-all">
                                            <IoCall className='w-6 h-6' />
                                        </div>
                                    </a>
                                    <div className='ml-2'>
                                        <p className='font-semibold'>+91 90031 06755</p>
                                    </div>
                                </li>
                            </ul>
                        </div>


                    </div>
                </Slide>
                <Slide direction="up" >

                    <form className="ml-auto space-y-4" >
                        <input type='text' placeholder='Name' name='from_name'
                            className="w-full rounded-md py-2.5 px-4 text-sm outline-none placeholder:text-white bg-[#9b5c49]" />
                        <input type='email' placeholder='Email' name='from_email'
                            className="w-full rounded-md py-2.5 px-4 text-sm outline-none placeholder:text-white bg-[#9b5c49]" />
                        <textarea placeholder='Message' rows="6" name='message'
                            className="w-full rounded-md px-4 text-sm pt-2.5 outline-none placeholder:text-white bg-[#9b5c49]"></textarea>
                        <button type='submit'
                            className="text-[#743e2e] bg-[#ffffff] font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
                    </form>
                </Slide>

            </div>
        </div>
    )
}

export default GetInTouch
