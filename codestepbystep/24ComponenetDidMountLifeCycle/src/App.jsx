
import './App.css'
import React from 'react'

class App extends React.Component{
 constructor(){
   super();
   this.state = {
    name:"anil"
   }
 }
 componentDidMount(){
  console.log("componetntDidMount")
 }
render(){
  console.log("render")
  return (
    <>
   
      <h1>{this.state.name}</h1>
      <button onClick={()=>{this.setState({name:"sidhu"})}}>click</button>
    </>
  )
}
}
export default App
