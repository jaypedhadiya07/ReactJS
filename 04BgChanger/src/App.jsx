import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 w-full px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="text-2xl outline-none px-4 py-1 rounded-full text-black shadow-lg"
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            className="text-2xl outline-none px-4 py-1 rounded-full text-black shadow-lg"
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            className="text-2xl outline-none px-4 py-1 rounded-full text-black shadow-lg"
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            className="text-2xl outline-none px-4 py-1 rounded-full text-black shadow-lg"
            onClick={() => setColor("olive")}
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>

          <button
            className="text-2xl outline-none px-4 py-1 rounded-full text-black shadow-lg"
            onClick={() => setColor("gray")}
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>

          <button
            className="text-2xl outline-none px-4 py-1 rounded-full text-black shadow-lg"
            onClick={() => setColor("yellow")}
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            className="text-2xl outline-none px-4 py-1 rounded-full text-black shadow-lg"
            onClick={() => setColor("pink")}
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            className="text-2xl outline-none px-4 py-1 rounded-full text-black shadow-lg"
            onClick={() => setColor("purple")}
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            className="text-2xl outline-none px-4 py-1 rounded-full text-black shadow-lg"
            onClick={() => setColor("lavender")}
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>

          <button
            className="text-2xl outline-none px-4 py-1 rounded-full text-black shadow-lg"
            onClick={() => setColor("white")}
            style={{ backgroundColor: "white" }}
          >
            White
          </button>

          <button
            className="text-2xl outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("black")}
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
