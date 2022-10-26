import React from 'react'
import { Elements, CardElement, ElementsConsumer, useStripe, useElements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const StripeCard = () => {
  return (
    <div>
         <Elements stripe={stripePromise}>
       
       <ElementsConsumer>
           {({elements, stripe}) => (
              <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                   <CardElement />
                   <br /> <br />
                   <div className="flex justify-between">
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

export default StripeCard