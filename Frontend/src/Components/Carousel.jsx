import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const items = [
        { label: 'UI/UX Design' },
        { label: 'Development' },
        { label: 'Data Science'},
        { label: 'Business'},
        { label: 'Financial'},
        {label:  'Iot'},
        {label:  'Graphics'},
        {label:  'Statistics'}
      ];
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <div className='w-full m-auto p-4 bg-gray-100'>
            <div className='mt-20 border-2-green  space-x-4 bg-green-100 rounded-xl '>
            <Slider {...settings}>
                {items.map((i)=>(
                    <div className=' h-[60px] ml-8 ' >
                       
                      <div className='flex justify-center items-center   w-[150px] h-[40px] m-2 text-green-600 text-xl bg-white rounded-xl'>{i.label}</div>
                    </div>
                
                ) )}
                </Slider>

            </div>

        </div>
    )
}




export default Carousel;
