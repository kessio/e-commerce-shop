import React from 'react'
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import Review from './Review';
import SkeletonCart from '../components/skeleton/SkeletonCart'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart, isLoading }) => {
 const cartItems =  cart.line_items
 const subTotal = cart.subtotal
 const loopSkeleton = [1,2,3]
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
           isLoading?
           loopSkeleton.map((no,index) => (
             <SkeletonCart key={index}  />
           ))
           :

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

      <Review subTotal={subTotal} totalUniqueItems={cart.total_unique_items} />

    </div>
  </div>
    </div>
  )
}

export default Cart