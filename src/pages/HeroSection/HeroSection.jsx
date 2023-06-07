/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './HeroSection.css';
// Import Swiper React components
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSection = () => {
  const swiperRef = useRef();

  const autoplay = {
    delay: 3500,
    disableOnInteraction: false,
  };

  return (
    <div className=''>
      <Swiper
        modules={[Autoplay, Navigation]}
        // navigation={true}
        autoplay={autoplay}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper h-[450px] md:h-[450px] lg:h-[600px] xl:h-[100vh] w-full overflow-hidden relative">

        <SwiperSlide>
          <div className="firstSlider p-[30px] md:p-[100px] lg:p-[150px] w-full">
            <div className="w-full md:w[80%] lg:w-[50%] mt-[30px] md:mt-0 lg:mt-0">
              <span className='text-[#1854b4] font-bold'>Welcome TO Home Rental Service</span>
              <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold text-slate-800 py-3'>Find Your Amazing Real House Buy</h1>
              <p className='text-sm lg:text-base  text-[#343F52] font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem vitae quibusdam placeat dolores tempore optio error facere harum, corporis, voluptatibus dolor commodi sed non deleniti iusto voluptatum temporibus!</p>
              <div className="mt-5">
                <button className="px-6 py-2 text-center font-bold  hover:text-white hover:bg-[#3657CD] mt-2 mr-4  duration-300 bg-textYellow text-black ">About Us</button>
                <button className="px-6 py-2 text-center font-bold  text-white bg-[#3657CD] mt-2 duration-300 hover:bg-textYellow hover:text-black">Services</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="secondSlider p-[30px] md:p-[100px] lg:p-[150px] w-full">
            <div className="w-full md:w[80%] lg:w-[50%] mt-[30px] md:mt-0 lg:mt-0 lg:ml-auto text-right">
              <span className='text-[#1854b4] font-bold'>Welcome TO Home Rental Service</span>
              <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold text-slate-800 py-3'>Find Your Amazing Real House Buy</h1>
              <p className='text-sm lg:text-base  text-[#343F52] font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem vitae quibusdam placeat dolores tempore optio error facere harum, corporis, voluptatibus dolor commodi sed non deleniti iusto voluptatum temporibus!</p>
              <div className="mt-5">
                <button className="px-6 py-2 text-center font-bold  hover:text-white hover:bg-[#3657CD] mt-2 mr-4  duration-300 bg-textYellow text-black">About Us</button>
                <button className="px-6 py-2 text-center font-bold  text-white bg-[#3657CD] mt-2 duration-300 hover:bg-textYellow hover:text-black">Services</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className='absolute w-full hidden md:flex lg:flex xl:flex justify-between px-1 md:px-10 lg:px-10 xl:px-10 top-[50%] translate-y-[-50%] z-10'>
          <button onClick={() => swiperRef.current?.slidePrev()} className='p-2 text-xl md:text-2xl lg:text-3xl xl:text-3xl bg-blue-700 text-white rounded-full hover:text-white hover:bg-yellow-500 cursor-pointer hover:transition-colors transition-all duration-300'><FaArrowLeft /></button>

          <button onClick={() => swiperRef.current?.slideNext()} className='p-2 text-xl md:text-2xl lg:text-3xl xl:text-3xl bg-blue-700 text-white rounded-full  hover:text-white hover:bg-yellow-500 cursor-pointer hover:transition-colors transition-all duration-300'><FaArrowRight /></button>
        </div>
      </Swiper>
    </div>

  )
}

export default HeroSection