import React from 'react'
import {useParams} from 'react-router-dom'

export default function User() {
    // user params is responsible for fatch path dyanamic value
    let params = useParams();
    let {name} = params
  return (
    <div>
      <h1>This is {name} page</h1>
    </div>
  )
}
