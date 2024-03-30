import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [status, setStatus] = useState(false)
  
  return (
    <>
    {
      status?
     <h1>Hello</h1>:null
    }
     <button onClick={()=>setStatus(!status)}>Toggle</button>
    </>
  )
}

export default App
