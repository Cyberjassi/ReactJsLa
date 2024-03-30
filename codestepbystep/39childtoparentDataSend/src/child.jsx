import React from 'react'

export default function Child({fun}) {
    let data = "child"
  return (
    <div>
    
      <button onClick={()=>fun(data)}></button>
    </div>
  )
}
