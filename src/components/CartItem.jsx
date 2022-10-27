import React from 'react'

const CartItem = ({id, name, image, price, totalPrice, quantity, onUpdateCartQty, onRemoveFromCart}) => {
  return (
   <>
    <div className="hidden md:flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5">
            <div className="w-22">
              <img className="h-26" src={image} alt="" />
            </div>
            <div className="flex flex-col justify-center gap-5 ml-4 flex-grow">
              <span className="font-bold text-sm">{name}</span>
              <span onClick={() => onRemoveFromCart(id)} className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer">Remove</span>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
            <button onClick={() => onUpdateCartQty(id, quantity - 1)} className="bg-trasnsparent px-3 py-1 border border-red-500 hover:border-transparent hover:bg-red-500 hover:text-white text-gray-600 cursor-pointer">
              -
            </button>
            <span className="mx-2 border text-center w-8">{quantity}</span>
            <button onClick={() => onUpdateCartQty(id, quantity + 1)} className="bg-trasnsparent px-3 py-1 border border-red-500 hover:border-transparent hover:bg-red-500 hover:text-white text-gray-600 cursor-pointer">
              +
            </button>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">{price}</span>
          <span className="text-center w-1/5 font-semibold text-sm">{totalPrice}</span>
        </div>

         <div className="md:hidden border-t pb-5">
         <div className="flex w-full mt-3">
         <div className="w-23">
            <img className="h-26" src={image} alt="product" />
          </div>
         <div>
             <div className="flex flex-col ml-3 flex-grow">
               <span className="font-semibold text-sm">{name}</span>
             </div>
             <div className="flex flex-col justify-start items-start ml-3 flex-grow mt-4">
             <span className="font-bold text-sm">{price}</span>
             </div>
             <div className="ml-3 mt-4">
             <span onClick={() => onRemoveFromCart(id)} className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer">Remove</span>
             </div>
             </div>
           </div>
           <div>
           <div className="flex justify-end w-full">
            <button onClick={() => onUpdateCartQty(id, quantity - 1)} className="bg-trasnsparent w-8 border border-red-500 hover:border-transparent hover:bg-red-500 hover:text-white text-gray-600 cursor-pointer font-bold">
              -
            </button>
            <span className="mx-2 border text-center w-8">{quantity}</span>
            <button onClick={() => onUpdateCartQty(id, quantity + 1)} className="bg-trasnsparent px-3 py-1 border border-red-500 hover:border-transparent hover:bg-red-500 hover:text-white text-gray-600 cursor-pointer font-bold">
              +
            </button>
          </div>
           </div>
           </div>
           </>
  )
}

export default CartItem