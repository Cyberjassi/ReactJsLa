import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [print,setPrint] = useState(false)
  const [show, setShow] = useState(null)

  function showData(val){
    setShow(val.target.value)
  }
  return (
    <>
    {
    print?
    <h1>{show}</h1>
    : null
    }
     <input type="text" onChange={showData} name="" id="" />
     <button onClick={()=>setPrint(true)}>click</button>

    </>
  )
}

export default App
