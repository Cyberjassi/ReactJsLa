import React from 'react'
import {Link,NavLink,Outlet} from 'react-router-dom'

export default function About() {
  return (
    <div>
      this is about<br></br>
    {/* we can also use Nav Link for syling link     */}
      <Link to="/user/Anil">Anil</Link><br />
      <Link to="/user/Ankit">Ankit</Link><br />
      <Link to='/'>Go to home</Link><br /><br />

      <Link to='company'> company</Link><br />
      <Link to='channal'> channal</Link><br />
      <Link to='other'> Others</Link><br />
      <Outlet></Outlet>
    </div>
  )
}
