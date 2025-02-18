import React, { useState } from "react";
import About from "./About";

const Home = (props) => {
  const [clr, setclor] = useState("black");
  let color = (e) => {
    setclor(e);
  };

  return (
    <div>
      <About clr={clr}></About>
      <button
        onClick={() => {
          color("Blue");
        }} style={{padding:"10px", margin: "10px", border: "1px solid black", color: "blue"}}
      >
        Blue
      </button>
      <button
        onClick={() => {
          color("Red");
        }} style={{padding:"10px", margin: "10px", border: "1px solid black", color: "red"}}
      >
        Red
      </button>
      <button
        onClick={() => {
          color("Green");
        }} style={{padding:"10px", margin: "10px", border: "1px solid black", color: "green"}}
      >
        Green
      </button>
      <button
        onClick={() => {
          color("Yellow");
        }} style={{padding:"10px", margin: "10px", border: "1px solid black", color: "yellow"}}
      >
        Yellow
      </button>
    </div>
  );
};

export default Home;
