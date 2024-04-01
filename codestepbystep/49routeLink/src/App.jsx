import { useState} from 'react'
import {BrowserRouter,Routes,Route,Link,Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './componenet/Navbar'
import Home from './componenet/Home'
import About from './componenet/About'
import N404error from './componenet/n404error'
import User from './componenet/User'
import Filter from './componenet/Filter'
import Company from './componenet/company'
import Channel from './componenet/channel'
import Others from './componenet/others'
import Login from './componenet/login'
import Protected from './componenet/protected'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <BrowserRouter>
   
      <Routes>
        {/* protected for without login we can't acces pages if we want for other path then we can add easily */}
        <Route path='/' element={<Protected Component={Home}></Protected>}></Route>
        <Route path='/navbar' element={<Navbar></Navbar>}></Route>
        <Route path='/about/' element={<About></About>}>
          <Route path ='company' element={<Company></Company>}></Route>
          <Route path ='channal' element={<Channel></Channel>}></Route>
          <Route path ='other' element={<Others></Others>}></Route>
        </Route>
        {/* /* for if we have wrong url path then it execute */}
        {/* <Route path='/*' element={<N404error></N404error>}></Route> */}

        {/* Navigate use for redirect within to we gave where navigate  */}
        {/* <Route path='/*' element={<Navigate to='/'></Navigate>}></Route> */}

         {/* :name is the dynamic value  */}
        <Route path='user/:name' element={<User></User>}></Route>

        <Route path='/filter' element={<Filter></Filter>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
