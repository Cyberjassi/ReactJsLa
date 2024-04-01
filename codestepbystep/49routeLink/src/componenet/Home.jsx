import React from 'react'
import Navbar from './Navbar'
import {useLocation} from 'react-router-dom'
export default function Home() {
    // it tell all information about what type data or props are sending through that componenets
    const location = useLocation();
    console.log(location)
  return (
    <div>
        <Navbar></Navbar>
      this is home
    </div>
  )
}
