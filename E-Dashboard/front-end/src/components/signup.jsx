import React, { useEffect, useState } from 'react'
import {json, useNavigate} from 'react-router-dom';
import './signup.css'
function Signup() {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    let navigate=useNavigate();

    useEffect(()=>{
      let auth=localStorage.getItem('user');
      if(auth){
        navigate('/')
      }
    },[])
  

    let collectData= async ()=>{
        console.warn(name, password, email);
      let result=await fetch('http://localhost:5000/register',{
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{
          'Content-type':'application/json'
        },
      });
      result = await result.json();
      localStorage.setItem('user',JSON.stringify(result))
      // console.warn(result);
      if(result){
       navigate('/')
      }

    } 
   

    return (

    <>
    <div className="container">
    <h2>Register</h2>
    <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} />
    <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
    <button onClick={collectData}>sign-up</button>
    </div>
    </>

  )
}

export default Signup