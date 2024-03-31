import React, { useEffect, useState } from 'react';
import { assets } from '../assets/menu';
import { brand_list } from '../assets/menu';
import { BiMenuAltRight, BiPhoneCall, BiSearch, BiShoppingBag, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServivesOpen, setIsServivesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <Link to={'/'} className="text-[#2F3887] font-bold">
          Home
        </Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li>
              <Link to={'/menu'}>All</Link>
            </li>
            {brand_list.map((item, index) => {
              return (
                <li key={index}>
                  <a>{item.brand}</a>
                </li>
              );
            })}
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li>
              <a>Online Order</a>
            </li>
            <li>
              <a>Order Tracking</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Offers</a>
      </li>
    </>
  );

  return (
    <header className={`max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 ${isSticky ? 'shadow-lg bg-white ' : ''}`}>
      <div className={`${isOpen ? 'relative w-full flex justify-center ' : 'hidden'} `}>
        <div className="bg-white shadow-lg absolute z-10 top-20 w-full py-10">
          <ul tabIndex={0} className="flex flex-col items-center gap-6 text-sm ">
            <li>
              <Link to={'/'} className="text-[#2F3887] font-bold">
                Home
              </Link>
            </li>
            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-center rounded-lg px-4 py-2">
                  <span className="text-sm "> Menu </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2F3887]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>

                <ul className="px-2 py-2 bg-gray-100 rounded-xl">
                  <li>
                    <a href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-700">
                      All
                    </a>
                  </li>
                  {brand_list.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href="#" className="block rounded-lg px-4 py-2 text-sm  text-gray-500 hover:bg-gray-200 hover:text-gray-700">
                          {item.brand}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </details>
            </li>
            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-center rounded-lg px-4 py-2">
                  <span className="text-sm "> Services </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2F3887]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>

                <ul className="px-2 py-2 bg-gray-100 rounded-xl">
                  <li>
                    <a href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-700">
                      Online Order
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-700">
                      Order Tracking
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to={'/'} className="">
                Offers
              </Link>
            </li>
            <li className="bg-gray-200 rounded-xl py-2 px-5">
              <Link to={'/'} className="">
                <div className="flex items-center justify-center gap-2 relative">
                  Chart
                  <BiShoppingBag size={20} />
                  <span className="px-1 text-xs bg-[#2F3887] text-white rounded-full absolute bottom-2 -right-2">8</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-5 px-5 xl:px-24">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <img src={assets.logo} alt="" />
            </a>
          </div>

          <div className="hidden lg:block">
            <nav aria-label="Global">
              <ul tabIndex={0} className="flex items-center gap-6 text-sm ">
                <li>
                  <Link to={'/'} className="text-[#2F3887] font-bold">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="relative">
                    <button onClick={() => setIsMenuOpen((prev) => (prev === false ? true : false))} className="flex gap-1 items-center">
                      <span className="">Menu</span>

                      {isMenuOpen ? <FaAngleUp color="#2F3887" /> : <FaAngleDown color="#2F3887" />}
                    </button>

                    <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg`} role="menu">
                      <div className="p-2">
                        <Link to={'/menu'} className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700" role="menuitem">
                          All
                        </Link>
                        {brand_list.map((item, index) => {
                          return (
                            <a key={index} className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700" role="menuitem">
                              {item.brand}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="relative">
                    <button onClick={() => setIsServivesOpen((prev) => (prev === false ? true : false))} className="flex gap-1 items-center">
                      <span className="">Services</span>
                      {isServivesOpen ? <FaAngleUp color="#2F3887" /> : <FaAngleDown color="#2F3887" />}
                    </button>

                    <div className={`${isServivesOpen ? 'block' : 'hidden'} absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg`} role="menu">
                      <div className="p-2">
                        <a className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700" role="menuitem">
                          Online Order
                        </a>
                        <a className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700" role="menuitem">
                          Order Tracking
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to={'/'} className="">
                    Offers
                  </Link>
                </li>
              </ul>
              <ul className="flex items-center gap-6 text-sm"></ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden lg:flex">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg> */}
              <BiSearch size={20} />
            </button>
            <div className="hidden lg:flex items-center justify-center mr-3 relative">
              <BiShoppingBag size={20} />
              <span className="px-1 text-xs bg-[#2F3887] text-white rounded-full absolute bottom-2 left-3">8</span>
            </div>
            <div className="sm:flex sm:gap-4 text-xs md:text-md cursor-pointer">
              <a className="btn flex items-center gap-2 rounded-full md:px-6 md:py-3 px-3 py-2 bg-[#2F3887] hover:bg-[#1f2458] text-white border-none shadow-md">
                <BiPhoneCall /> Contact
              </a>
            </div>

            <div className="block lg:hidden">
              <button onClick={() => setIsOpen((prev) => (prev === false ? true : false))} className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg> */}
                {isOpen ? <BiX size={20} /> : <BiMenuAltRight size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
