import React from 'react'
import Slider from "react-slick";

function ClientTestimonials() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div className='md:py-20 py-12 bg-[#743e2e]  my-5 w-full px-10 mb-0'>
            <p className='text-center font-semibold  text-white text-2xl md:text-3xl my-2'>Client Testimonials</p>
                <Slider {...settings}>
                    <div className='py-5 bg-[#743e2e] text-white'>
                        <p className='text-2xl text-center my-2'>Rajesh</p>
                        <p className='text-center my-2'>"Indulging in rose milk and filter coffee at this quaint café was an absolute delight!"</p>
                    </div>
                    <div className='py-5 bg-[#743e2e] text-white'>
                        <p className='text-2xl text-center my-2'>Priya</p>
                        <p className='text-center my-2'>"I've been a fan of Jayam rose milk & coffee for years, and their decoction maker has truly been a game-changer for me. As someone who values both authenticity and convenience, being able to brew authentic South Indian filter coffee at home."</p>
                    </div>
                </Slider>

        </div>
    )
}

export default ClientTestimonials
