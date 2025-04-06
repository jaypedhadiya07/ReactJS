import { useState } from 'react'
import './App.css'

function App() {
  
  // let Count = 0   =====>   Why you need hooks

  let [Count, setCount] = useState(0)

  let Add = () => {
    if(Count < 20){
      // setCount(Count + 1)
      // setCount(Count + 1)
      // setCount(Count + 1) === > output +1

      setCount(prevCount => prevCount + 1)
      setCount(prevCount => prevCount + 1) // ===> output +2

    }
  }
  let Remove = () => {
    if(Count > 0){
      setCount(Count - 1)
    }
  }

  return (
    <>
      <u style={{color : "yellow"}}><h1>Count Is : {Count}</h1></u>
      <button style={{color : "green"}} onClick={Add}>ADD {Count}</button>
      <br></br><br></br>
      <button onClick={Remove}>REMOVE {Count}</button>
    </>
  )
}

export default App
