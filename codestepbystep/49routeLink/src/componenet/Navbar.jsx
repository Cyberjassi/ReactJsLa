import React from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate();
  return (
    <div>
      This is navbar<br></br>
      {/* <Link to="/">Go to Home</Link><br></br>
      <Link to="/about">Go to ABout</Link><br />
      <Link to="/filter">filter</Link><br /> */}
      <button onClick={()=>navigate("/")}>Got to Home</button>
      <button onClick={()=>navigate("/about")}>Got to About</button>
      <button onClick={()=>navigate("/filter")}>Got to Filter</button>

    </div>
  )
}
