import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./About";

function App() {
  const x = prompt("Enter Your Value");
  return (
    <div>
      <Home text={x}></Home>
      <About></About>
    </div>
  );
}

export default App;