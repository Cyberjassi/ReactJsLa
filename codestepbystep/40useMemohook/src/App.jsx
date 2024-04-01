import { useState,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(10)
let memo = useMemo(()=>{
  console.log("memo call")
  return count*10
 },[count])
  return (
    <>
    <h1>Count: {count}</h1>
    <h1>Count1: {count1}</h1>
    <h1>{memo}</h1>
    <button onClick={()=>setCount(count+1)}>count</button>
    <button onClick={()=>setCount1(count1+1)}>count1</button>
    </>
  )
}

export default App
