import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Info() {
    return (
        <div className='h-[34rem] w-full overflow-hidden background'>

            <div className='h-full flex items-center px-10 text-white bg-[#743e2e6c] w-full' >
                <p className='text-2xl md:text-3xl flex items-start flex-col'>
                    Welcome to <span className='font-bold block'>
                        <TypeAnimation
                            sequence={[
                                'TANJORE DEGREE COFFEE',
                                2000,
                                'A SIP OF TRADITION',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2rem', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </span>
                </p>
            </div>


            {/* <div className='h-[25rem] flex justify-center items-center'>
                    <img src={infoPhoto} alt="" className='h-full'/>
                </div> */}

        </div>
    )
}

export default Info
