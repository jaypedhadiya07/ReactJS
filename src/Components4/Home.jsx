import React, { useState } from "react";

const Home = () => {
  const [mode, setMode] = useState("");
  function LightMode() {
    setMode("light");
  }
  function DarkMode() {
    setMode("dark");
  }

  return (
    <div
      style={{
        backgroundColor:
          mode == "light" ? "cornflowerblue" : mode == "dark" ? "black" : "",
        color:
          mode == "light" ? "black" : mode == "dark" ? "cornflowerblue" : "",
        height: "100vh",
        width: "100%",
        textAlign: "center",
      }}
    >
      <h1>Welcome</h1>
      <button
        onClick={() => {
          DarkMode();
        }}
        style={{
          padding: "10px",
          marginLeft: "10px",
          borderRadius: "5px",
          fontWeight: "800",
        }}
      >
        Dark Mode
      </button>
      <button
        onClick={() => {
          LightMode();
        }}
        style={{
          padding: "10px",
          marginLeft: "10px",
          borderRadius: "5px",
          fontWeight: "800",
        }}
      >
        Light Mode
      </button>
    </div>
  );
};

export default Home;
