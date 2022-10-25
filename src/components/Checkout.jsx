import React, {useEffect, useState} from 'react'
import { commerce } from '../lib/commerce'
import CheckoutForm from './CheckoutForm'

const Checkout = ({ cart }) => {
    
    const [checkoutToken, setCheckoutToken] = useState(null)
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
            checkoutToken &&
        <CheckoutForm checkoutToken={checkoutToken} />
}

    </div>
  )
}

export default Checkout