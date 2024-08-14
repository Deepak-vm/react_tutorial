import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 

function App() {
  const [counter, setCounter] = useState(0)

  const increaseValue=()=>{
    setCounter(counter+1)
  }
  const decreaseValue =()=>{
    if(counter>0){
    setCounter(counter-1)
    }
    else if(counter==0){
      alert("Cannot decrease further")
    }
  }

  return (
    <>
      <h1>Hello</h1>
      <h1>{counter}</h1>
      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
    </>
  )
}

export default App
