import React from 'react';
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h1>HR Blog App</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/create">New Blog</a>
        </div>
      
    </nav>
  )
}
