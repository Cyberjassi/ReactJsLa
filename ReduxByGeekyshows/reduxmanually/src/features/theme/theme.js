import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTextColor } from './themeSlice'

function Theme() {
    const [color,setColor] = useState("white")
    const dispatch = useDispatch()
  return (
    <div>
        <h1>{color}</h1>
     <input type="text" onChange={(e)=>{setColor(e.target.value)}}/>
     <button onClick={()=>{dispatch(changeTextColor(color))}}>Change Text</button>
    </div>
  )
}

export default Theme
