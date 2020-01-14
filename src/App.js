import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
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

    toast.success(`${name} has been added to the cart.`);
  };

  return (
    <div>
      <TopMenu />
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
