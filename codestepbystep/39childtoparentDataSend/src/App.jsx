import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './child'

function App() {
  function greet(data){
    alert(data)
  }

  return (
    <>
      <Child fun={greet}></Child>
      
    </>
  )
}

export default App
