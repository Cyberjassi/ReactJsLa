import { useState ,useEffect} from 'react'
import './App.css'
import User from './user'

function App() {
     const [count,setCount] = useState(0);
     const [count1,setCount1] = useState(0);
  
    function add(){
      setCount(count+1)
    }
    function add1(){
      setCount1(count1+1)
    }
    
  return (
    <>
     <User c1={count} c2={count1}></User>
     <button onClick={()=>add()}>c1</button>
     <button onClick={()=>add1()}>c2</button>
     
    </>
  )
}

export default App
