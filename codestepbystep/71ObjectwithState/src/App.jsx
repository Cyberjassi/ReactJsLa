import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState({name:"jay",email:"jay@gmail.com"})




  return (
    <>
      <h1>{data.name}</h1>
      <h1>{data.email}</h1>
      {/* here we are doing state udate in object in that filled we only want to update our name then if we only set name then email will empty for that we set email:data.email that is data of email instead of this we can also use ...data if we don't want to repeat for others fileds */}
      <input type="text" onChange={(e)=>{setData({email:data.email,name:e.target.value})}} value={data.name}/><br />
      <input type="text" value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})} }/><br />
      
    </>
  )
}

export default App
