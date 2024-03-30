import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 let student = ['A','b','c','d']
 let detail = [
  {name:"jay",class:"11"},
  {name:"Rohan",class:"10"},
  {name:"Vijay",class:"12"},
 ]


  return (
    <>
      {
        student.map((item)=>
          <p>{item}</p>
        )
      }
      {
        detail.map((item)=>
         <p>{item.name}{item.class}</p>
        )
      }
    </>
  )
}

export default App
