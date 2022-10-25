import React, { useState } from 'react'
import { FaBars,FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = ({cart}) => {
    const [nav, setNav] = useState(false);
      
  return (
    <div>
  <nav className="bg-gray-400">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      </div>
      <div onClick={() => setNav(!nav)}  className="md:hidden cursor-pointer pr-4 z-10 text-white">{nav ? <FaTimes size={20} /> : <FaBars size={20} />}</div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <Link to={"/"}><span className="text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Shop</span></Link>

            <Link to={"/checkout"}><span className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Checkout</span></Link>
          </div>
        </div>
      </div>
      <Link to={"/cart"}>
      <div className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-white hover:bg-gray-700 px-3 py-2 rounded-md">
    <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
      <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
      </svg>
      {cart.total_items &&
        <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{ cart.total_items}
        </span>
      }
    
</div>
</Link>
    </div>
  </div>
  { nav && (
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pt-2 pb-3">

      <Link to={"/"}><span className="text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium">Shop</span></Link>

      <Link to={"/checkout"}><span className="text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium">Checkout</span></Link>

    </div>
  </div>
  )}
</nav></div>
  )
}

export default NavBar