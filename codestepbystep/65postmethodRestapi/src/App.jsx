import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title,setTitle]=useState("")
  const [body,setBody] = useState("")

  function saveuser(){
    // create object for send in body 
    let data = {title,body}
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1",{
      // our method is post
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log("response",resp)
      })
    })
  }

  return (
    <>
    
      <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title} name="" placeholder='Enter title' id="" /><br /><br />
      <input type="text" value={body} onChange={(e)=>{setBody(e.target.value)}} name="" placeholder='Enter body' id="" />
      <button onClick={()=>saveuser()}></button>
    </>
  )
}

export default App
