import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './signup.css'
function Register() {
   const [name,setName]=useState('');
   const [email,setEmail]=useState('')
   const[password,setPassword]=useState('')
   const navigate=useNavigate();

   useEffect(()=>{
    let auth=localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
   })

   const collectData=async ()=>{
    // console.log(name,password,email);
    let result=await fetch('http://localhost:5000/register',{
      method:'post',
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    result=await result.json();
    localStorage.setItem('user',JSON.stringify(result))
    console.log(result)
    navigate('/')

   }

  return (
    <div className='signup-content'>
        
    <div className='signupmain' >
    <h1>register</h1>
      <div className="input-container">
      <div className="input-grp">
        <div>Name</div>
      <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
     
      <div className="input-grp">
        <div>Email</div>
      <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div className="input-grp">
        <div>password</div>
      <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div>
      </div>
      <button onClick={collectData}>sin up</button>
      </div>
    
    </div>
  )
}

export default Register
