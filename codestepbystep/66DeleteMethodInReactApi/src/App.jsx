import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    getList()
  },[])

function getList(){
  fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    .then((result)=>{
      return result.json()
      }).then((resp)=>{
        setData(resp)
    })
}
  function deleteu(id){
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        getList()
      })
    })
  }
  return (
    <>
<table>
       </table>
      {
         
        data.map((e)=>(
         
            <div key={e.id}>
              <h1>{e.id}</h1>
              <h2>{e.title}</h2>
              <p>{e.body}</p>
              <button onClick={()=>{deleteu(e.id)}}>Delete</button>
              <br /><br />
              <hr />
        
            </div>
        ))
      }
    </>
  )
}

export default App
