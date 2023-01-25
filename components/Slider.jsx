import React, { useState } from 'react'
import { SliderData } from './SliderData';
import Image from 'next/image';

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const lenght = slides.length;

    const nextSlide = () => {
        setCurrent(current === lenght - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? lenght - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.lenght <= 0) {
        return null;
    }

  return (
    <div id='gallery'>
        <h1>Gallery</h1>
        <div>
            {SliderData.map((slide, index) => {
                return (
                    <div key={index} className=''>
                        <Image src={slide.image} 
                        alt='/' 
                        width='1440' 
                        height='600' 
                        objectFit='cover' />
                    </div>
                );
            })};
        </div>
    </div>
  )
}

export default Slider