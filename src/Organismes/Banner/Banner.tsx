import React, { FC } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import SlideOne from '../../image/slider1.jpg';
import SlideTwho from '../../image/slider2.jpg';

import './style.scss';

interface BannerProps {
  className ?: string
}

const Banner:FC<BannerProps> = ({ className }) => {
  return (
    <div className={`banner smartphone:h-auto shadow-lg w-full bg-gray-300 ${className}`}>
       <Carousel interval={6000} 
        showStatus={false} 
        showIndicators 
        showThumbs={false} 
        infiniteLoop 
        autoPlay  
        className='banner-carousel'>
          <div className='banner-carousel__img'>
            <img src={SlideOne} alt="" />
          </div>
          <div className='banner-carousel__img'>
            <img src={SlideTwho} alt="" />
          </div>
        </Carousel>
    </div>
  )
}

export default Banner