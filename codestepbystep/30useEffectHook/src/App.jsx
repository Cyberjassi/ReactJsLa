import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // use effect combination of componentDidMount, componentDidUpdate and componentWillUnmount it run firstly 
   useEffect(()=>{
    console.log("use Effect")
   })

   function add(){
    setCount(count+1);
   }
  return (
    <>
     <h1>Count {count}</h1>
     <button onClick={()=>add()}>add</button>
    </>
  )
}

export default App
