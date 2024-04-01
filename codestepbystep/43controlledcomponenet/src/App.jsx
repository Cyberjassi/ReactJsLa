import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState("")

  return (
    <>
    <h1>{value}</h1>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
 

    </>
  )
}

export default App
