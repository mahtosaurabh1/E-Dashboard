import React, { useState } from 'react'

function AddProduct() {
  const [name,setName]=useState();
  const [price,setPrice]=useState();
  const [category,setCategory]=useState();
  const [company,setCompany]=useState();

  let handleAdd=async ()=>{
   
    let userId=JSON.parse(localStorage.getItem('user'))._id;
    let result=await fetch('http://localhost:5000/add-product',{
      method:'post',
      body:JSON.stringify({name,price,category,userId,company}),
      headers:{
        'Content-type':'application/json'
      },
    });
    result = await result.json();
    setCategory('')
    setCompany('')
    setName('')
    setPrice('')
    console.log(result);
  }
  return (
    <div className='container'>
    <input type="text" placeholder='enter name' value={name} onChange={(e)=>{setName(e.target.value)}} />
    <input type="text" placeholder='enter price' value={price} onChange={(e)=>{setPrice(e.target.value)}} />
    <input type="text" placeholder='enter category' value={category} onChange={(e)=>{setCategory(e.target.value)}} />
    <input type="text" placeholder='enter company' value={company} onChange={(e)=>{setCompany(e.target.value)}} />
    <button onClick={handleAdd}>add product</button>
    </div>
  )
}

export default AddProduct