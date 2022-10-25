import React from 'react'
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
 const cartItems =  cart.line_items
 const subTotal = cart.subtotal
  return (
    <div className="">
   <div className="container mx-auto mt-10">
    <div className="flex flex-col md:flex-row shadow-md my-10">
      <div className=" w-full md:w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold md:text-2xl">Shopping Cart</h1>
          <button onClick={handleEmptyCart} type="button" className="bg-transparent hover:bg-red-500 text-red-600 font-semibold hover:text-white py-2 px-3 md:py-2 md:px-4 border border-red-500 hover:border-transparent rounded">Empty Cart</button>
        </div>
        <div className="hidden md:flex justify-between mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        {
            cartItems?.map((item) => (
          <CartItem 
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image.url}
          price={item.price.formatted_with_symbol}
          totalPrice={item.line_total.formatted_with_symbol}
          quantity ={item.quantity}
          onUpdateCartQty={handleUpdateCartQty}
          onRemoveFromCart={handleRemoveFromCart}
           />

            ))      
}
        
        <Link to={"/"} className="flex font-semibold text-indigo-600 text-sm mt-10">
          <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </Link>
      </div>

      <div id="summary" className="w-screen md:w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Items {cart.total_unique_items}</span>
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
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>$600</span>
          </div>
          <Link to={"/checkout"}><button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button></Link>
        </div>
      </div>

    </div>
  </div>
    </div>
  )
}

export default Cart