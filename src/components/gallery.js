import React from 'react'
import Slider from "react-slick";
import gallery1 from './images/info_photo.png'
import gallery2 from './images/Gallery2.png'
import gallery3 from './images/Gallery3.png'
import gallery4 from './images/Gallery4.jpeg'

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
        <div className='bg-white px-8 py-4 pb-10' id='news'>
            <p className='text-center text-2xl md:text-3xl my-2'>Gallery</p>

            <Slider {...settings}>

                <div className='bg-[#ac6853] h-80 p-5 rounded-xl my-5 hover:scale-105 transition-transform duration-300 '>
                    <img src={gallery1} alt="" className='w-full h-full' />
                </div>
                <div className='bg-[#ac6853] h-80 p-5 rounded-xl my-5 hover:scale-105 transition-transform duration-300 '>
                    <img src={gallery2} alt="" className='w-full h-full' />
                </div>
                <div className='bg-[#ac6853] h-80 p-5 rounded-xl my-5 hover:scale-105 transition-transform duration-300 '>
                    <img src={gallery3} alt="" className='w-full h-full' />
                </div>
                <div className='bg-[#ac6853] h-80 p-5 rounded-xl my-5 hover:scale-105 transition-transform duration-300 '>
                    <img src={gallery4} alt="" className='w-full h-full' />
                </div>

            </Slider>



        </div>
    )
}

export default Gallery
