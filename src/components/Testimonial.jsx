import React from 'react';
import { assets } from '../assets/menu';
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 my-[100px]">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className=" h-64 overflow-hidden rounded-[20px] sm:h-80 lg:h-full">
          <img src={assets.banner_2} className=" inset-0 h-full w-full object-cover" alt="" />
        </div>
        <div className="p-5 lg:p-20 rounded-lg lg:col-span-2 place-self-center">
          <p className="font-bold text-sm uppercase">Testimonial</p>
          <h2 className="text-4xl text-[#2F3887] font-bold sm:text-5xl mt-8">What Our Customers Say About Us</h2>

          <p className="mt-8 text-gray-600 text-lg">“I had the pleasure of purchasing shoes at Footsync last night, and I am still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
          <div className="flex mt-8">
            <img src={assets.testi_1} alt="" height={50} width={50} className="mr-[-10px] border-[3px] border-white rounded-full" />
            <img src={assets.testi_2} alt="" height={50} width={50} className="mr-[-10px] border-[3px] border-white rounded-full" />
            <img src={assets.testi_3} alt="" height={50} width={50} className="mr-[-10px] border-[3px] border-white rounded-full" />
            <div className="ml-[20px]">
              <p>Customer Feedback</p>
              <p className="flex items-center gap-3">
                <FaStar className="text-[yellow]" />
                4.9
                <span>(30K Reviews)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
