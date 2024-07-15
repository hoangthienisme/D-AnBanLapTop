import React from 'react';
import Slider from "react-slick";
import { Image } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StyledSlider from './style';

const SliderComponent = ({ arrImages }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <StyledSlider {...settings}>
            {arrImages.map((image) => (
                <div key={image}>
                    <Image
                        src={image}
                        alt="slider"
                        preview={false}
                        width="100%"
                        height="250px"
                    />
                </div>
            ))}
        </StyledSlider>
    );
}

export default SliderComponent;
