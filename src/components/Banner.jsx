import React from 'react';

const Banner = ({ assets }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24">
      <div className="py-28 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
        {/* img */}
        <div className="sm:w-1/2">
          <img src={assets.banner_1} className="p-2" alt="" />
        </div>

        {/* texts */}
        <div className="md:w-1/2 px-4 space-y-7">
          <h2 className="md:text-4xl text-3xl font-bold md:leading-snug leading-snug">Welcome to</h2>
          <span className="text-[#2F3887] md:text-6xl text-5xl font-black">FOOTSYNC</span>
          <p className="text-[#919191] text-md">Isn't it high time to bring out the fashionista in you? Embrace FootSync, a premium footwear sanctuary where style meets comfort!</p>
          <button className="bg-[#2F3887] font-semibold btn text-white px-8 py-3 rounded-full">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
