import React, {useEffect, useState} from 'react'
import { commerce } from '../lib/commerce'
import CheckoutMultistep from './CheckoutMultistep'

const Checkout = ({ cart, order, onCaptureCheckout, error}) => {
    
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'})
            
                setCheckoutToken(token)
                setLoading(false)
                
            } catch (error) {
                
            }
        }
        generateToken()

    },[cart])

  return (
    <div>
        {
   
    <CheckoutMultistep checkoutToken={checkoutToken} onCaptureCheckout={onCaptureCheckout} isLoading={isLoading}/>
}

    </div>
  )
}

export default Checkout