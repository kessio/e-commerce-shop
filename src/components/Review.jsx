import React from 'react'
import { Link } from 'react-router-dom';

const Review = ({ subTotal, totalUniqueItems}) => {
  return (
    <div>
        <div id="summary" className="w-screen md:w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Items {totalUniqueItems}</span>
          { subTotal &&
          <span className="font-semibold text-sm">{subTotal.formatted_with_symbol} </span>
          }
        
        </div>
        <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select className="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div className="py-10">
          <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" onChange={(e) => (e.target.value)} />
        </div>
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase" disabled>Apply</button>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            {
            subTotal && 
            <span>{subTotal.formatted_with_symbol}</span>
            }
            
          </div>
          {totalUniqueItems === 0 ? <button className="px-8 py-3 text-white bg-blue-300 rounded focus:outline-none" disabled>Checkout</button>:
          <Link to={"/checkout"}><button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 px-10 text-sm text-white uppercase">Checkout</button></Link>}
        </div>
      </div>
    </div>
  )
}

export default Review