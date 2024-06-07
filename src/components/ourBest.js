import React from 'react'
import quality from './images/Best_quality.png'
import authenticity from './images/org_authentic.png'
import { Slide } from "react-awesome-reveal";

function OurBest() {
    return (
        <div className='w-full my-5'>
            <p className='text-center text-[#743e2e] font-semibold text-2xl md:text-3xl my-4'>Our Best</p>
            <div className='flex justify-evenly items-center flex-wrap'>
                <Slide direction="up" >

                    <div className='flex justify-center items-center flex-col w-[18rem] sm:w-80 shadow-lg bg-white rounded-2xl shadow-slate-500 p-2 my-4'>
                        <img src={authenticity} alt="authenticity" className='w-24' />
                        <p className='py-2'>
                            Our commitment to preserving the authentic taste and aroma of South Indian filter coffee sets us apart from the rest. With Tanjore Degree Coffee, you can enjoy the true essence of this beloved beverage in the comfort of your own home.
                        </p>
                    </div>
                </Slide>
                <Slide direction="up" >

                    <div className='flex justify-center items-center flex-col w-[18rem] sm:w-80 shadow-lg bg-white rounded-2xl shadow-slate-500 p-2 my-4'>
                        <img src={quality} alt="quality" className='w-36' />
                        <p className='py-2'>
                            Produces by Boiled Milk, Crafted with care and precision, our rose milk embodies the perfect balance of creamy richness and delicate floral notes, ensuring each sip is a decadent delight of unmatched quality.                    </p>
                    </div>
                </Slide>
            </div>

        </div>
    )
}

export default OurBest
