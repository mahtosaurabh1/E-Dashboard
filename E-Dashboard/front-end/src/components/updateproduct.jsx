import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Updateproduct() {
  const [name,setName]=useState();
  const [price,setPrice]=useState();
  const [category,setCategory]=useState();
  const [company,setCompany]=useState();
  let param=useParams();

  useEffect(()=>{
    getProductDetail();
  },[])
  let getProductDetail=async ()=>{
   let result=await fetch(`http://localhost:5000/products/${param.id}`);
   result = await result.json();
   setName(result.name)
   setCategory(result.category)
   setCompany(result.company)
   setPrice(result.price)
   
  }

  const updateproduct=async ()=>{
    let result=await fetch(`http://localhost:5000/product/${param.id}`,{
      method:'put',
      body:JSON.stringify({name,company,category,price}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    result=await result.json();
    console.log(result);
  }
  return (
    <div className='container'>
    <input type="text" placeholder='enter name' value={name} onChange={(e)=>{setName(e.target.value)}} />
    <input type="text" placeholder='enter price' value={price} onChange={(e)=>{setPrice(e.target.value)}} />
    <input type="text" placeholder='enter category' value={category} onChange={(e)=>{setCategory(e.target.value)}} />
    <input type="text" placeholder='enter company' value={company} onChange={(e)=>{setCompany(e.target.value)}} />
    <button onClick={updateproduct}>update product</button>
    </div>
  )
}

export default Updateproduct