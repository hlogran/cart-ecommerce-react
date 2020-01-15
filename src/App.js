import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import TopMenu from "./components/TopMenu";
import useFetch from "./hooks/useFetch";
import { API_URL, STORAGE_PRODUCTS_CART_KEY } from "./utils/constants";
import Products from "./components/Products";

function App() {
  const products = useFetch(API_URL);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    getCartProducts();
  }, []);

  const getCartProducts = () => {
    const ids = localStorage.getItem(STORAGE_PRODUCTS_CART_KEY);
    setCartProducts(JSON.parse(ids || "[]"));
  };

  const addProductToCart = (id, name) => {
    const ids = cartProducts;
    ids.push(id);
    setCartProducts(ids);
    localStorage.setItem(
      STORAGE_PRODUCTS_CART_KEY,
      JSON.stringify(cartProducts)
    );
    getCartProducts();
    toast.success(`${name} has been added to the cart.`);
  };

  const emptyCart = () => {
    localStorage.setItem(STORAGE_PRODUCTS_CART_KEY, JSON.stringify([]));
    getCartProducts();
  };

  return (
    <div>
      <TopMenu cartProducts={cartProducts} emptyCart={emptyCart} allProducts={products}/>
      <Products products={products} addProductToCart={addProductToCart} />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
