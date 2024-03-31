import React from 'react';
import { assets } from '../assets/menu';
import { FaStar } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 my-[100px]">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className=" h-full overflow-hidden rounded-[20px] sm:h-full lg:h-full grid grid-cols-2 gap-5 p-3  lg:order-last">
          <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-3xl h-full w-full p-1 md:p-3 sm:h-60 shadow-lg border">
            <img src={assets.icon_testi_1} className=" w-[25px] h-[25px] md:w-[60px] md:h-[60px]" alt="" />
            <h2 className="text-sm md:text-xl font-bold text-[#2F3887] uppercase">Services</h2>
            <p className="w-[100%] md:w-[80%] text-xs md:text-md text-center">Satisfy your guests with the various products provided</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-3xl h-full w-full p-1 md:p-3 sm:h-60 shadow-lg border">
            <img src={assets.icon_testi_2} className=" w-[25px] h-[25px] md:w-[60px] md:h-[60px]" alt="" />
            <h2 className="text-sm md:text-xl font-bold text-[#2F3887] uppercase">Fast Delivery</h2>
            <p className="w-[100%] md:w-[80%] text-xs md:text-md text-center">We deliver your order promptly to your door</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-3xl h-full w-full p-1 md:p-3 sm:h-60 shadow-lg border">
            <img src={assets.icon_testi_3} className=" w-[25px] h-[25px] md:w-[60px] md:h-[60px]" alt="" />
            <h2 className="text-sm md:text-xl font-bold text-[#2F3887] uppercase">Online Ordering</h2>
            <p className="w-[100%] md:w-[80%] text-xs md:text-md text-center">Explore menu & order with ease using our Online Ordering</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-3xl h-full w-full p-1 md:p-3 sm:h-60 shadow-lg border">
            <img src={assets.icon_testi_4} className=" w-[25px] h-[25px] md:w-[60px] md:h-[60px]" alt="" />
            <h2 className="text-sm md:text-xl font-bold text-[#2F3887] uppercase">Gift Cards</h2>
            <p className="w-[100%] md:w-[80%] text-xs md:text-md text-center">Give the gift of exceptional dining with Foodi Gift Cards</p>
          </div>
        </div>
        <div className="p-y-5 lg:p-y-20 rounded-lg lg:col-span-1 place-self-center mt-5 lg:mt-0">
          <p className="font-bold text-sm uppercase">Our Story & Services</p>
          <h2 className="text-4xl text-[#2F3887] font-bold sm:text-5xl mt-8">Our Sales Journey and Services</h2>
          <p className="mt-8 text-gray-600 text-lg">Rooted in passion, we curate unforgettable experiences and offer exceptional service.</p>
          <button className="bg-[#2F3887] font-semibold btn text-white px-8 py-3 rounded-full mt-8">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
