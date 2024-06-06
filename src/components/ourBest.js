import React from 'react'
import quality from './images/Best_quality.png'
import authenticity from './images/org_authentic.png'

function OurBest() {
    return (
        <div className='w-full'>
            <p className='text-center text-2xl md:text-3xl my-4'>Our Best</p>
            <div className='flex justify-evenly items-center flex-wrap'>

                <div className='flex justify-center items-center flex-col w-[18rem] sm:w-80 shadow-lg rounded-2xl shadow-slate-500 p-2 my-2'>
                    <img src={authenticity} alt="" className='w-24' />
                    <p className='py-2'>
                        Our commitment to preserving the authentic taste and aroma of South Indian filter coffee sets us apart from the rest. With Tanjore Degree Coffee, you can enjoy the true essence of this beloved beverage in the comfort of your own home.
                    </p>
                </div>

                <div className='flex justify-center items-center flex-col w-[18rem] sm:w-80 shadow-lg rounded-2xl shadow-slate-500 p-2 my-2'>
                    <img src={quality} alt="" className='w-36' />
                    <p className='py-2'>
                    Produces by Boiled Milk, Crafted with care and precision, our rose milk embodies the perfect balance of creamy richness and delicate floral notes, ensuring each sip is a decadent delight of unmatched quality.                    </p>
                </div>
            </div>

        </div>
    )
}

export default OurBest
