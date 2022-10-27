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
        <div className="py-10">
          <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" onChange={(e) => (e.target.value)} />
        </div>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            {
            subTotal && 
            <span>{subTotal.formatted_with_symbol}</span>
            }
            
          </div>
          {totalUniqueItems === 0 ? <button className="px-8 py-3 text-white bg-blue-300 rounded focus:outline-none" disabled={true}>Checkout</button>:
          <Link to={"/checkout"}><button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 px-10 text-sm text-white uppercase">Checkout</button></Link>}
        </div>
      </div>
    </div>
  )
}

export default Review