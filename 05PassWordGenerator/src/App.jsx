import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [passWord, setPassWord] = useState("");

  const passWordGenerater = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}<>`~_+?/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      setPassWord(pass);
    }
  }, [length, numberAllowed, charAllowed, setPassWord]);

  useEffect(() => {
    passWordGenerater();
  }, [length, numberAllowed, charAllowed, passWordGenerater]);

  // useRef Hook

  const passwordref = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordref.current?.select();
    // passwordref.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(passWord);
  }, [passWord]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-3 my-8 text-white-500 bg-gray-700">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 my-2">
          <input
            type="text"
            value={passWord}
            className="bg-white w-full py-1 px-1 "
            placeholder="Password"
            readOnly
            ref={passwordref}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-orange-500">Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="text-orange-500">
              Numbers
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charcterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charcterInput" className="text-orange-500">
              Charcters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;