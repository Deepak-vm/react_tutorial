import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [color , setColor]= useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-0'>
        <div className='flex flex-end gap-2 px-3 py-2 bg-white rounded-2xl'  >
          <button onClick={()=>setColor("red")}  className='px-4 py-1 rounded-full' style={{backgroundColor:"red", color:"white"}}>Red</button>
          <button onClick={()=>setColor("Green")}  className='px-4 py-1 rounded-full' style={{backgroundColor:"Green", color:"white"}}>Green</button>
          <button onClick={()=>setColor("blue")}  className='px-4 py-1 rounded-full' style={{backgroundColor:"blue", color:"white"}}>blue</button>
          <button onClick={()=>setColor("olive")}  className='px-4 py-1 rounded-full' style={{backgroundColor:"olive", color:"white"}}>Olive</button>
          <button onClick={()=>setColor("black")}  className='px-4 py-1 rounded-full' style={{backgroundColor:"black  ", color:"white"}}>Black</button>
        </div>
      </div>

    </div>
    
   

  ) 
}

export default App
