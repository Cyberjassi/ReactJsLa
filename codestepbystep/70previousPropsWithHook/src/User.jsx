import React,{useEffect,useRef} from 'react'

export default function User(props) {
    const lastVal = useRef();
    useEffect(()=>{
        lastVal.current = props.co
    })
    const previousProps = lastVal.current
  return (
    <div>
      <h1>Current Value :{props.co}</h1>
      <h1>Previous Value :{previousProps}</h1>
    </div>
  )
}
