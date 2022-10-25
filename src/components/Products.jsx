import React from 'react'
import Product from './Product'

const Products = ({ products, addToCart }) => {
   
  return (
    <div>
    <section className="">
        <div className="container px-6 py-8 mx-auto lg:pl-20">
        <div className="lg:flex lg:-mx-2">
        <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                    <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                        <p className="text-gray-500 dark:text-gray-300">6 Items</p>
                        <div className="flex items-center">
                            <p className="text-gray-500 dark:text-gray-300">Sort</p>
                            <select className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                                <option value="#">Recommended</option>
                                <option value="#">Size</option>
                                <option value="#">Price</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {
           products.map((prod) => (
            <Product 
            key={prod.id} 
            id={prod.id}
            name={prod.name} 
            price={prod.price.formatted_with_symbol}
            image={prod.image.url}
            addToCart={addToCart}
            
             />

           ))
        }
     </div>
    </div>
    </div>
    </div>
    </section>
    </div>
  )
}

export default Products