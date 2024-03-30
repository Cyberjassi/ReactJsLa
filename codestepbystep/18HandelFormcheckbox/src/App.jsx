import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [select,setSelect] = useState("")
  const [check,setCheck] = useState(false)
  function handleForm(e){
    e.preventDefault()
    console.log(name,select,check)
  }
  return (
    <>
      <form onSubmit={handleForm}>
        <input type="text" name="" id="" placeholder='Enter YOur name' onChange={(e)=>setName(e.target.value)} />
    
        <select value={select} onChange={(e) => setSelect(e.target.value)}>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
</select>

        {/* checked for for checkbox */}
        <input type="checkbox" name="" id="" onChange={(e)=>setCheck(e.target.checked)}/><br /><br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
