import React from 'react'
import Slider from "react-slick";
import gallery1 from './images/Gallery img4.jpeg'
import gallery2 from './images/Gallery2.png'
import gallery3 from './images/Gallery3.png'
import gallery4 from './images/Gallery4.jpeg'
import { Slide } from "react-awesome-reveal";

function Gallery() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    };
    return (
        <div className='bg-white px-8 py-4 pb-10' id='gallery'>
            <p className='text-center font-semibold  text-[#743e2e] text-2xl md:text-3xl my-2'>Gallery</p>
            <Slide direction="up" >

            <Slider {...settings}>

                <div className='bg-[#743e2e] h-80 p-5 rounded-xl my-5 hover:scale-105 transition-transform duration-300 '>
                    <img src={gallery1} alt="" className='w-full h-full' />
                </div>
                <div className='bg-[#743e2e] h-80 p-5 rounded-xl my-5 hover:scale-105 transition-transform duration-300 '>
                    <img src={gallery2} alt="" className='w-full h-full' />
                </div>
                <div className='bg-[#743e2e] h-80 p-5 rounded-xl my-5 hover:scale-105 transition-transform duration-300 '>
                    <img src={gallery4} alt="" className='w-full h-full' />
                </div>
                <div className='bg-[#743e2e] h-80 p-5 rounded-xl my-5 hover:scale-105 transition-transform duration-300 '>
                    <img src={gallery3} alt="" className='w-full h-full' />
                </div>

            </Slider>
</Slide>


        </div>
    )
}

export default Gallery
