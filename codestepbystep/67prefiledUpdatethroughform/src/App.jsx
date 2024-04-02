import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const [userId,setUserId] = useState(null)

  useEffect(() => {
    getList()
  }, [])

  function getList() {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then(result => result.json())
      .then(resp => {
        setData(resp)
        setTitle(resp[0].title)
        setBody(resp[0].body)
        setUserId(resp[0].id)
      })
  }

  function deleteu(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    }).then(result => {
      result.json().then(resp => {
        console.warn(resp)
        getList()
      })
    })
  }

  function selectUser(id) {
   
    console.warn(data[id - 1])
    setTitle(data[id - 1].title)
    setBody(data[id - 1].body)
    setUserId(data[id - 1].id)
  }
  function updateUser(){

    let item = {title,body,userId}
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`, {
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then(result => {
      result.json().then(resp => {
        console.warn(resp)
        getList()
      })
    })
  }

  return (
    <>
  <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map(e => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.title}</td>
            <td>{e.body}</td>
            <td>
              <button onClick={() => deleteu(e.id)}>Delete</button>
              <button onClick={() => selectUser(e.id)}>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  <div className="input-container">
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} name="" id="" /><br /><br />
    <input onChange={(e)=>setBody(e.target.value)} type="text" value={body} name="" id="" /><br /><br />
    <button onClick={()=>updateUser()}>Update User</button>
  </div>
</>
  )
}

export default App
