import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
//import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: false, // Asegúrate de que esto sea false
        prevArrow: false,
        nextArrow: false,
    };

    return (
        <Slider {...settings} className="slider">
            <div>
                <img src="/images/slide12.jpg" alt="Slide 1" className="w-full h-64 md:h-[50rem] object-cover" />
            </div>
            <div>
                <img src="/images/slide22.jpg" alt="Slide 2" className="w-full h-64 md:h-[50rem] object-cover" />
            </div>
            <div>
                <img src="/images/slide32.jpg" alt="Slide 3" className="w-full h-64 md:h-[50rem] object-cover" />
            </div>
            <div>
                <img src="/images/slide42.jpg" alt="Slide 3" className="w-full h-64 md:h-[50rem] object-cover" />
            </div>            
        </Slider>
    );
};

export default ImageSlider;