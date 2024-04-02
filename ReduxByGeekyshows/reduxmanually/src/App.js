
import './App.css';
import { useState } from 'react';
function App() {
  const[count,setCount]=useState(0)
  return (
    <div className="App">
      <button onClick={()=>{setCount(count+1)}}>+</button>{count}<button onClick={()=>{setCount(count-1)}}>-</button>
    </div>
  );
}

export default App;
