import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import './login.css'

function Login() {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    let navigate=useNavigate();

    useEffect(()=>{
        let auth=localStorage.getItem('user');
        if(auth){
          navigate('/')
        }
      },[])

    let handleLogin=async ()=>{
        let result=await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-type':'application/json'
              },
        })
        result=await result.json();
        if(result.name){
            localStorage.setItem('user',JSON.stringify(result));
            navigate('/')

        }else{
            alert('email does not exist')
        }
        console.log(result);
    }
  return (
    <div className='container'>
      <h3>Login</h3>
    <input type="text" placeholder='enter email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <input type="password" placeholder='enter password'  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    <button onClick={handleLogin}>Login</button>

    </div>
  )
}

export default Login