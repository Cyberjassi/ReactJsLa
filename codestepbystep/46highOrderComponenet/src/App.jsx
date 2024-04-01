import { useState } from 'react'
import Hoc from './Hoc'
import Child from './Child'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hoc c = {Child}></Hoc>
    </>
  )
}

export default App
