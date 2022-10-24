import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import NavBar from "./components/NavBar";
import Products from "./components/Products";

function App() {
  const [products, setProducts] = useState([])

  const fetchProducts = async() => {
    const { data} = await commerce.products.list()

    setProducts(data)

  }
  useEffect(() => {
    fetchProducts()
  }, [])
  
  return (
    <div className="App">
      <NavBar />
      <Products products={products} />
      
    </div>
  );
}

export default App;
