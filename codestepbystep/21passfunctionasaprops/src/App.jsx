import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Child'

function App() {
  const [count, setCount] = useState(0)
  function greetButton(){
    alert("hello")
  }
  return (
    <>
     <button onClick={()=>greetButton()}>Parent button</button>
     <Child  btn={greetButton}/>
    </>
  )
}

export default App
