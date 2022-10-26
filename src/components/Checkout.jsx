import React, {useEffect, useState} from 'react'
import { commerce } from '../lib/commerce'
import Cart from './Cart'
import CheckoutForm from './CheckoutForm'
import CheckoutMultistep from './CheckoutMultistep'

const Checkout = ({ cart, order, onCaptureCheckout, error}) => {
    
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingData,setShippingData] = useState({})



    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'})
            
                setCheckoutToken(token)
                
            } catch (error) {
                
            }
        }
        generateToken()

    },[cart])

  return (
    <div>
        {
   
   <CheckoutMultistep checkoutToken={checkoutToken} onCaptureCheckout={onCaptureCheckout}/>
}

    </div>
  )
}

export default Checkout