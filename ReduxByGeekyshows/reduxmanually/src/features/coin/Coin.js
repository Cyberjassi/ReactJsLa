import React from 'react'
import {useSelector,useDispatch} from "react-redux"

function Coin() {
    const count = useSelector((state)=>state.counter.count)
    const themeTextColor = useSelector((state)=>state.theme.color)
  return (
    <div>
      <h1>Here count {count}</h1><br />
      <span style={{color:themeTextColor}}>Coin:</span>
    </div>
  )
}

export default Coin
