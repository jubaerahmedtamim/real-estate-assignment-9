import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import slides from '../../../public/slider.json'

const Slider = () => {
    return (
        <div>
            <Swiper
            className='h-[700px]'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {slides.map(slide =><SwiperSlide key={slide.id}><img style={{height:"700px", width: "100%" }} src={slide.image_url} alt={slide.title}></img></SwiperSlide>)}
                
            </Swiper>
        </div>
    );
};

export default Slider;