import React, {useState} from 'react'
import CheckoutForm from './CheckoutForm'
import PaymentForm from './PaymentForm'
import CompletePurchase from './CompletePurchase'

const CheckoutMultistep = ({checkoutToken, onCaptureCheckout}) => {

    const [step, setStep] = useState(0)

    const [adressData, setData] = useState({})
 
 const next = (myData) => {

  setData(myData)
 }
 const setPageNo = (number) => {
    setStep(number)

 }
  const PageDisplay = () => {
    if(step === 0){
      return  checkoutToken && <CheckoutForm checkoutToken={checkoutToken}  shippingFormData={next} setPageNo={setPageNo} />
    }else if(step ===1){
      return <PaymentForm checkoutToken={checkoutToken} onCaptureCheckout={onCaptureCheckout} userData={adressData} setPageNo={setPageNo}  />
    }else{
      return <CompletePurchase />
    }
  }

  const stepsNumber = ["Step 1", "Step 2", "Step 3"]
  return (
    <div>
         <div className="flex mt-20 min-h-screen">
      <div
        className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-2xl">
        <div className="">
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-full">
            <div className="w-full">
              <div className="md:w-3/4 bg-gray-200 rounded-full">
                <div
                  className={`p-1 text-xs font-medium leading-none text-center text-blue-100 bg-blue-600 rounded-full ${ step === 0 ? "w-40" : step === 1 ? "w-60": "w-100"  } `}>
                  {stepsNumber[step]}
                </div>
              </div>
               {PageDisplay()}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CheckoutMultistep