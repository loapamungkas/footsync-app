import React from 'react';

const Categories = ({ brand_list }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16">
      <div className="text-center">
        <p className="font-bold text-sm">CUSTOMER FAVOURITE</p>
        <h2 className="text-4xl font-bold mt-3 text-[#2F3887]">Popular Brands</h2>
      </div>

      {/* category cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-around items-center mt-12 ">
        {brand_list.map((item, i) => (
          <div key={i} className="shadow-lg border rounded-[20px] bg-white py-6 px-5 min-w-[250px] min-h-[250px] flex flex-col items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300 z-10">
            <div className="mx-auto flex items-center justify-center bg-[#2F3887] p-2 rounded-full h-28 w-28">
              <img src={item.brand_image} alt="" className=" object-cover" />
            </div>
            <div className="mt-5 space-y-1">
              <h5 className="text-[#1E1E1E] font-semibold">{item.brand}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
