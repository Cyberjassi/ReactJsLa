import React from 'react'
// useSearchParams for filter query in path
import {useSearchParams} from 'react-router-dom'

export default function Filter() {
    // it's like useState 
    const[searchParams,setSearchParams] = useSearchParams();
    // it's for get the age from the path
    console.log(searchParams.get('age'))
    console.log(searchParams.get('city'))

    let age = searchParams.get('age')
    let city = searchParams.get('city')
  return (
    <div>
      <h1>filter</h1>
      <h3>Age is: {age}</h3><br />
      <h3>City is: {city}</h3><br />
      {/* through setSearchParams we can set our query also */}
      {/* within setSearchParams it take object  */}
      <button onClick={()=>setSearchParams({age:18,city:'rtm'})}></button>
      {/* we can also do with input box */}
    </div>
  )
}
