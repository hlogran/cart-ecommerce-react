import React, { useState } from "react";
import TopMenu from "./components/TopMenu";
import useFetch from "./hooks/useFetch";
import { API_URL, STORAGE_PRODUCTS_CART_KEY } from "./utils/constants";
import Products from "./components/Products";

function App() {
  const products = useFetch(API_URL);
  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCart = (id, name) => {
    const ids = cartProducts;
    ids.push(id);
    setCartProducts(ids);
    localStorage.setItem(
      STORAGE_PRODUCTS_CART_KEY,
      JSON.stringify(cartProducts)
    );
  };

  return (
    <div>
      <TopMenu />
      <Products products={products} addProductToCart={addProductToCart} />
    </div>
  );
}

export default App;
