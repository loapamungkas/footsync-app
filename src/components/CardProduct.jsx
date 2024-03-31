import React from 'react';
import { FaStar } from 'react-icons/fa';

const CardProduct = ({ item }) => {
  return (
    <div className="shadow-lg rounded-[20px] bg-white py-6 px-5 md:max-w-[280px] mx-auto text-center cursor-pointer hover:-translate-y-2 transition-all duration-300 z-10 border">
      <div className="w-full mx-auto flex items-center justify-center">
        <img src={item.image} alt="" className="img-product p-5 rounded-xl h-48" />
      </div>
      <div className="mt-5 space-y-1 px-3 text-start">
        <h5 className="text-[#1E1E1E] font-bold">{item.name}</h5>
        <h5 className="text-[#919191] text-sm">{item.description}</h5>
        <div className="flex justify-between">
          <h5 className="text-[#1E1E1E] font-semibold">
            <span className="text-sm text-[tomato]">Rp.</span>
            {item.price}
          </h5>
          <div className="flex items-center gap-2">
            <FaStar className="text-[yellow]" />
            <h5 className="text-[#1E1E1E] font-semibold">4.5</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
