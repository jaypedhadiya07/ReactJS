import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
    <div style={{display: "flex", alignItems:"center"}}>
      {data.map((el, ind) => {
        return (
          <div>
            <img src={el.image} alt=""></img>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Home;
