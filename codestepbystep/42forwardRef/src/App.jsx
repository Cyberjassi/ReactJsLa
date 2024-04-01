import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './child'

function App() {
  const [count, setCount] = useState(0)
  let inputRef = useRef(null)
 function handleClick(){
   inputRef.current.value = 1000
   inputRef.current.style.color = "red"
 }
  return (
    <>
    <Child ref={inputRef}></Child>
      <button onClick={()=>handleClick()}></button>
    </>
  )
}

export default App
