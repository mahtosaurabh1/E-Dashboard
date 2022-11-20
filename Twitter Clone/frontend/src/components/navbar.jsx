import React from "react";
import {Link, useNavigate} from 'react-router-dom'
import "./navbar.css";
function Navbar() {

  let navigate=useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate("/signup");
  }

  return (
    <header>
      <ul className="navbar-content">
        <li>Home</li>
        <li>About us</li>
        <li> <Link to='/login'>Login</Link> </li>
        <li> <Link to='/signup'>Signup</Link> </li>
        <li ><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </header>
  );
}

export default Navbar;
