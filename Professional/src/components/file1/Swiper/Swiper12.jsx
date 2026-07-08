import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./Swiper.css"
import rasm1 from "./01.jpg"
import rasm2 from "./02.webp"
const Swiper12 = () => {
  return (
    <div className='swiper'>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={rasm1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={rasm2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={rasm1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={rasm2} alt="" /></SwiperSlide>
      ...
    </Swiper>

    </div>
  )
}

export default Swiper12