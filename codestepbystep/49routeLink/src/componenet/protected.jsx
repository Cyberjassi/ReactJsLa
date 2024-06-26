import React from 'react'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

export default function Protected(props) {
    // destructing 
    const {Component} = props
    const navigate = useNavigate();

    // if user is not login then it redirect to login
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!login){
            navigate('login')
        }
    });
  return (
    <div>
      <Component></Component>
    </div>
  )
}
