import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   let inputref = useRef(null)
   function handleclick(){
    inputref.current.value=1000
    inputref.current.style.color="red"
   }
  return (
    <>
       <h1>hello</h1>
      <button onClick={()=>handleclick()}></button>
    </>
  )
}

export default App
