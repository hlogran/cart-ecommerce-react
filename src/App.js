import React from "react";
import TopMenu from "./components/TopMenu";
import useFetch from "./hooks/useFetch";
import { API_URL } from "./utils/constants";

function App() {
  const result = useFetch(API_URL);
  console.log(result);

  return (
    <div>
      <TopMenu />
    </div>
  );
}

export default App;
