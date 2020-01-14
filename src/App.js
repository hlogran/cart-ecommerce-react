import React from "react";
import TopMenu from "./components/TopMenu";
import useFetch from "./hooks/useFetch";
import { API_URL } from "./utils/constants";
import Products from "./components/Products";

function App() {
  const products = useFetch(API_URL);

  return (
    <div>
      <TopMenu />
      <Products products={products} />
    </div>
  );
}

export default App;
