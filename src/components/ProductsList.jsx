import React from 'react';
import { Link } from 'react-router-dom';
import CardProduct from './CardProduct';

function ProductsList({ products_list }) {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 my-20 relative">
      <div className="text-left">
        <p className="font-bold text-sm">SPECIAL SHOES</p>
        <h2 className="text-4xl font-bold mt-3 text-[#2F3887]">Find Your Perfect Pair!</h2>
      </div>
      <div className="md:absolute right-3 top-8 mb-10 md:mr-24">
        <Link to={'/menu'}>
          <button className="bg-[#2F3887] font-semibold btn text-white px-8 py-3 rounded-full">See All</button>
        </Link>
      </div>
      <div className="flex sm:flex-row flex-wrap gap-y-5 gap-x-1 justify-between items-center mt-12 content-start">
        {shuffleArray(products_list)
          .slice(0, 4)
          .map((item, i) => (
            <CardProduct item={item} key={i} />
          ))}
      </div>
    </div>
  );
}

export default ProductsList;
