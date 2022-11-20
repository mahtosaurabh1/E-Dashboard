import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Logout() {

  let navigate=useNavigate();

useEffect(()=>{
  navigate('/signup')
},[])
  return (
   <>
   </>
  )
}

export default Logout