import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    .then((result)=>{
      return result.json()
      }).then((resp)=>{
        setData(resp)
    })
  },[])
  console.log(data)

  
  return (
    <>
<table>
       </table>
      {
         
        data.map((e)=>(
         
            <div key={e.id}>
              <h2>{e.title}</h2>
              <p>{e.body}</p>
            </div>
        ))
      }
    </>
  )
}

export default App
