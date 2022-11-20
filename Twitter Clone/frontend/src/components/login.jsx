import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
 
  let navigate=useNavigate();
  useEffect(()=>{
    let auth=localStorage.getItem('user');
        if(auth){
          navigate('/feed')
        }
  })
  const handleLogin=async ()=>{
    let result=await  fetch('http://localhost:5000/login',{
      method:'post',
      body:JSON.stringify({name,email}),
      headers:{
        'Content-type':'application/json'
      }
    })
    result=await result.json();

    localStorage.setItem('user',JSON.stringify(result))

    navigate('/feed');    
    console.log(result)
  }

  return (
    
    <div>
      <input type="text" placeholder='email' value={name} onChange={(e)=>{setName(e.target.value)}}/ >
      <input type="text" placeholder='password' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
