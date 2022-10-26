import React, { useState } from 'react'
import { Elements, CardElement, ElementsConsumer, useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CompletePurchase from './CompletePurchase'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const PaymentForm = ({checkoutToken, userData, onCaptureCheckout, setPageNo={setPageNo}}) => {

    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault()

        if(!stripe || !elements ) return

        const { error, paymentMethod } = await stripe.createPaymentMethod({type: 'card', card: elements.getElement(CardElement)})
        if(error){
            console.log(error)
        }else{
            const orderData = {
                line_items: checkoutToken.line_items,
                customer: {
                    firstname: userData.firstname,
                    lastname: userData.lastname,
                    email: userData.email,
                 },
                 shipping: {
                    name: 'Primary',
                    address: userData.address,
                    street: userData.address,
                    town_city: userData.city,
                    country: userData.country,
                 },
                 fulfillment: {
                    shipping_method: userData.options
                 },
                 payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id
                    }
                 }
                
            }
            setPageNo(2)
            onCaptureCheckout(checkoutToken.id, orderData)
           
        }

    }

    
  return (
    <div className="w-full border-t mt-10">
       <h5 className="text-center font-bold text-gray-500 my-6">Payment Information</h5>

       <Elements stripe={stripePromise}>
       
        <ElementsConsumer>
            {({elements, stripe}) => (
               <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                    <CardElement />
                    <br /> <br />
                    <div className="">
                    <button type="submit" className="px-8 py-3 text-white bg-blue-300 rounded focus:outline-none" disabled={!stripe || !elements}>
                        Pay {checkoutToken.subtotal.formatted_with_symbol}
                    </button>
                    </div>
                    </form>

            )}
        </ElementsConsumer>

       </Elements>

    </div>
  )
}

export default PaymentForm