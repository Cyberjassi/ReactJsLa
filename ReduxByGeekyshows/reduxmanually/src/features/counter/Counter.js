import React from 'react'

// increase and decrease value property of our conterSlice
import { decrement,increment } from './counterSlice';
// for use our redux and useSelector is responsible for read our state or data and useDispatch is responsible for modification our state
import {useSelector,useDispatch} from "react-redux"
 export default function Counter() {
    // within a counterSlice count 
    const count = useSelector((state)=>state.counter.count)
    // useDispatch for updatation our value
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>{dispatch(increment())}}>+</button>{count}<button onClick={()=>{dispatch(decrement())}}>-</button>
    </div>
  )
}
