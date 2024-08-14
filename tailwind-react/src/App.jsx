import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/cards'

function App() {
  const [count, setCount] = useState(0)
  const img1 ="https://picsum.photos/seed/picsum/200/300"
  const img2 ="https://picsum.photos/200/300?grayscale"
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>      
      <Card img={img1} username="deepak" btnText="click me"/>
      <Card img={img2} username="vishwakarma" btnText="remove me"/>
    </>
  )
}

export default App
