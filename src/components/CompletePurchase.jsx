import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsBagCheckFill } from 'react-icons/bs'
import { runFireWorks } from '../lib/utils'


const CompletePurchase = () => {

    useEffect(() => {
      runFireWorks()
      
    }, [])
    
  return (
    <div>
      <div className="bg-gray-300 rounded-lg mt-10">
       <div className="flex  flex-col items-center py-10 px-4">
        <p>
        <BsBagCheckFill size={50} color={'red'} />
        </p>
        <p className="text-2xl font-bold text-gray-700 mt-2">Thank You For Your Order</p>
        <p className="font-medium text-gray-700">Check Your Email spam For The Receipt</p>
        <p className="text-gray-700 mt-5">If you have questions, please email </p> <a className="ml-l text-red-500 font-semibold" href="mailto:sharonkessio6@gmail.com">sharonkessio6@gmail.com</a>
        <Link to={"/"} className="flex font-semibold text-indigo-600 text-sm mt-10">
          <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </Link>
       </div>
       </div>
    </div>
  )
}

export default CompletePurchase