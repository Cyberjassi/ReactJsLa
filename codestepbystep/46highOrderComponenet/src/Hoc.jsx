import React from 'react'
import Child from './Child'

export default function Hoc(props) {
  return (
    <div>
     <props.c/>
    </div>
  )
}
