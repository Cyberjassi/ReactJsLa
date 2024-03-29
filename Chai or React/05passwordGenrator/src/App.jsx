import { useStatem,useCallback } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="+_)(*&^%$#@!~)"

    for(let i = 1;i<=Array.length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass = str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
           value={password}
           readOnly
        
        />
      </div>
    </div>
    </>
  )
}

export default App



