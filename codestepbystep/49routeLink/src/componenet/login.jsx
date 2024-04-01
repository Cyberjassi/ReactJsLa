import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


export default function Login() {
    const login=()=>{
        localStorage.setItem('login',true)
        navigate('/')
    }
    const navigate = useNavigate();

    // if user is not login then it redirect to login
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!login){
            navigate('/')
        }
    });
  return (
    <div>
      <input type="text" name="" id="" />
      <input type="text" name="" id="" />
      <button onClick={login}>Login</button>
    </div>
  )
}
