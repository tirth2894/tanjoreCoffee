import React from 'react'
import infoPhoto from './images/info_photo.png'

function Info() {
    return (
        <div className='flex py-7 flex-wrap-reverse w-full justify-evenly items-center overflow-hidden '>

                <div className='my-5 mt-7 mx-2 flex flex-col justify-center items-start text-[#743e2e]' >
                    <p className='text-2xl md:text-3xl flex items-center justify-center flex-col'>
                        Welcome to <span className='font-bold block'> Tanjore Degree Coffee </span>
                    </p>
                </div>


                <div className='h-[25rem] flex justify-center items-center'>
                    <img src={infoPhoto} alt="" className='h-full'/>
                </div>

        </div>
    )
}

export default Info
