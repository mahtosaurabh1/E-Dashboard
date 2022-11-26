import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  let navigate = useNavigate();
  useEffect(() => {
    let auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const handleLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ name, email }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));

    navigate("/");
  };

  return (
    <div className="login-content">
      <div className="loginmain">
        <h2>Login User</h2>
        <div className="input-container">
          <div className="input-grp">
            <div>Email</div>
            <input
              type="text"
              placeholder="email"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="input-grp">
            <div>Password</div>
            <input
              type="text"
              placeholder="password"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
