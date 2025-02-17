import React, { useState } from "react";
import About from "./About";
const Home = (props) => {
  const [count, setcount] = useState(0);

  const inc = () => {
    setcount(count + 1);
  };
  const dec = () => {
    setcount(count - 1);
  };
  return (
    <div>
      <About cou={count}></About>
      <button
        style={{ border: "1px solid black", width: "25px", fontSize: "25px" }}
        onClick={() => {
          inc();
        }}
      >
        +
      </button>
      <button
        style={{ border: "1px solid black", width: "25px", fontSize: "25px" }}
        onClick={() => {
          dec();
        }}
      >
        -
      </button>
    </div>
  );
};
export default Home;