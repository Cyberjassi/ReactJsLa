import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  let[counter,setCounter]=useState(0)

  // useEffect(()=>{
  //   console.log("Yoo",counter)
  // },[counter])

 const Add = ()=>{
  counter = counter+1;
  setCounter(counter)
  // setCounter(counter+4);
  // console.log("2",counter)
  // setCounter(counter+3);
  // console.log("3",counter)
  // setCounter(counter+2);
  // console.log("4",counter)
  // setCounter(counter+5);
  // console.log("5",counter)
  // console.log(setCounter)
 }
 const Remove = () => {
   if(counter == 0){
     return
   }
   counter = counter-1;
  setCounter(counter);
 }
  return (
    <>
    <h1>Counter value: {counter}</h1>
    <button onClick={Add}>Add value</button><br /><br></br>
    <button onClick={Remove}>Remove value </button>
    </>
  )
}

export default App
