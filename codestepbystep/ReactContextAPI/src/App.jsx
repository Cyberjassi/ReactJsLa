import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'

import { useContext } from 'react'
import { CounterContext } from './contexts/Counter'

function App() {

  // use CounterContext
  const couterState = useContext(CounterContext)
  console.log("Context",couterState)

  return (
    <>
    {/* use the CounterContext state */}
    {/* we can like do that in every component */}
      <h1>Count {couterState.count}</h1>
     <Counter></Counter>
     <Counter></Counter>
     <Counter></Counter>
     <Counter></Counter>
    </>
  )
}

export default App
