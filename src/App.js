import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { commerce } from "./lib/commerce";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Checkout from "./components/Checkout";


function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [order, setOrder] = useState({})
  const [errorMessage,setErrorMessage] = useState('')
  const [isLoading, setLoading] = useState(true)

  const fetchProducts = async() => {
    const { data} = await commerce.products.list()
    setProducts(data)
    setLoading(false) 
  }

  const fetchCart = async() => {
    setCart(await commerce.cart.retrieve())
    setLoading(false) 
  }

  const handleAddToCart = async (product_id, quantity) => {
    setCart(await commerce.cart.add(product_id, quantity))

  }
  const handleUpdateCartQty = async (line_item_id,quantity) => {
      setCart(await commerce.cart.update(line_item_id, { quantity }));
  }

  const handleRemoveFromCart = async (line_item_id) => {
    const item = await commerce.cart.remove(line_item_id)
    setCart(item)
  }

  const handleEmptyCart = async () => {
    const item = await commerce.cart.empty()
    setCart(item)
  }
 const refreshCart = async () => {
  const newCart = await commerce.cart.refresh()

  setCart(newCart)
 }
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
      setOrder(incomingOrder)
      refreshCart()
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  return (
    <div className="App">
      <NavBar cart = {cart} />
      <Routes>
      <Route path="/"  element={<Products products={products} addToCart={handleAddToCart} isLoading={isLoading} />} />
      <Route path="/cart" element={
      <Cart 
          cart={cart} 
          handleUpdateCartQty={handleUpdateCartQty}
          handleRemoveFromCart={handleRemoveFromCart}
          handleEmptyCart={handleEmptyCart}
          isLoading={isLoading} 

       />} />
        <Route path="/checkout" element={
        <Checkout 
        cart = {cart} 
        order={order}
        onCaptureCheckout={handleCaptureCheckout}
        error={errorMessage}

         />
        } />
      </Routes>
    </div>
  );
}

export default App;
