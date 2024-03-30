import React from 'react'
import { useState,useEffect } from 'react'

export default function User({c1,c2}) {
    useEffect(()=>{
        console.log("use Effect Call ")
      },[c1])
 
  return (
    <div>
      <h1>count: {c1}</h1>
      <h1>count1: {c2}</h1>
      
    </div>
  )
}
