import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'

function App() {
  const [count, setCount] = useState(0)
  function update(){
    setCount(count+1)
  }

  return (
    <>
     <User co = {count}> </User>
     <button onClick={update}></button>
    </>
  )
}

export default App
