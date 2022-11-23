import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './feed.css'

function Feed() {
  const [messages, setMessages] = useState([]);
  const [message,setMessage]=useState('');
  let navigate = useNavigate();
  useEffect(() => {
    getMessage();
  },[]);

  let auth=localStorage.getItem('user');

  const getMessage = async () => {
    let result = await fetch("http://localhost:5000/feed");
    result = await result.json();
    setMessages(result);

  };

  const handleAdd= async ()=>{
    let result=await fetch("http://localhost:5000/add-message",{
      method:'post',
      body:JSON.stringify({message}),
      headers:{
        'Content-type':'application/json'
      },
    }); 
    getMessage();
    setMessage('')
  }

  let trackInput=(e)=>{
    let val=e.target.value;
    setMessage(val);
  }

  return (
    <div className="feed-container">

      <div className="addMessage-content">
        <input type="text" value={message} onChange={trackInput} />
        <button onClick={handleAdd}>add</button>
      </div>

      <div className="print-detail">
      {
      messages.map((val, index) => {
        return (
          <>
          <div className="print-content">
          <h4>{JSON.parse(auth).name}</h4>
          <p key={val._id}>{val.message}</p>
          </div>
          </>
        )
      })}
      </div>
      
    </div>
  );
}

export default Feed;
