import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  function updateCounter(){
 
    setCount((prev)=>{
      let rand = Math.floor(Math.random()*10)
      console.log(prev)
      return rand;
    })
  }

  return (
    <>
     <h1>{count}</h1>
     <button onClick={updateCounter}>Update</button>
    </>
  )
}

export default App
