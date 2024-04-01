import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* for user router we have to wrap inside BrowserRouter then Routes  Then finally Route */}
     <BrowserRouter>
        <Routes>
          {/* in path we defind route and in element we defined which component will run when we fired that route */}
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/about/' element={<About></About>}></Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
